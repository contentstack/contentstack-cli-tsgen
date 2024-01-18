import * as fs from 'fs'
import * as http from 'https'
import * as async from 'async'
import { ContentTypeCollection } from 'contentstack'
import {HttpClient, cliux, configHandler} from '@contentstack/cli-utilities'
import {schemaToInterfaces, generateNamespace} from '@gql2ts/from-schema'

import {introspectionQuery} from '../../graphQL'

type RegionUrlMap = {
  [prop: string]: string;
};

const REGION_URL_MAPPING: RegionUrlMap = {
  na: 'cdn.contentstack.io',
  us: 'cdn.contentstack.io',
  eu: 'eu-cdn.contentstack.com',
  'azure-na': 'azure-na-cdn.contentstack.com',
  'azure-eu': 'azure-eu-cdn.contentstack.com',
}

const GRAPHQL_REGION_URL_MAPPING: RegionUrlMap = {
  na: 'https://graphql.contentstack.com/stacks',
  us: 'https://graphql.contentstack.com/stacks',
  eu: 'https://eu-graphql.contentstack.com/stacks',
  'azure-na': 'https://azure-na-graphql.contentstack.com/stacks',
  'azure-eu': 'https://azure-eu-graphql.contentstack.com',
  stage: 'https://stag-graphql.csnonprod.com/stacks',
}

export type StackConnectionConfig = {
  apiKey: string;
  token: string;
  region: any;
  environment: string;
  branch?: string|null;
}

const limit = 100

const queryParams = {
  limit,
  include_global_field_schema: true,
}

export async function stackConnect(client: any, config: StackConnectionConfig, cdaHost: string) {
  try {
    const clientParams: {
      api_key: string;
      delivery_token: string;
      environment: string;
      region: string;
      branch?: string;
      early_access?: string[];
    } = {
      api_key: config.apiKey,
      delivery_token: config.token,
      environment: config.environment,
      region: config.region,
    }
    if (config.branch) {
      clientParams.branch = config.branch
    }

    const earlyAccessHeaders = configHandler.get(`earlyAccessHeaders`);
    if (earlyAccessHeaders && Object.keys(earlyAccessHeaders).length > 0) {
      clientParams.early_access = Object.values(earlyAccessHeaders);
    }

    // eslint-disable-next-line new-cap
    const stack = client(clientParams)
    // check and update host if doesn't exists in REGION_URL_MAPPING
    if (!REGION_URL_MAPPING[clientParams.region]) {
      stack.setHost(cdaHost)
    }

    const results = (await stack.getContentTypes({
      ...queryParams,
      include_count: true,
    })) as Omit<ContentTypeCollection, 'count'> & { count: number }

    if (results.count > limit) {
      const additionalQueries = Array.from(
        {length: Math.ceil(results.count / limit) - 1},
        (_, i) => {
          return async.reflect(async () => {
            return stack.getContentTypes({
              ...queryParams,
              skip: (i + 1) * limit,
            })
          })
        }
      )
      const additionalResults = (await async.parallel(additionalQueries)) as {
        value: ContentTypeCollection;
      }[]

      for (const r of additionalResults) {
        results.content_types = [
          ...results.content_types,
          ...r.value.content_types,
        ]
      }
    }

    const types = results.content_types

    if (stack) {
      return {
        stack,
        types,
      }
    }
    throw new Error('Could not connect to the stack.')
  } catch (error) {
    throw new Error(
      'Could not connect to the stack. Please check your credentials.'
    )
  }
}

// Currently delivery sdk does not support querying global fields on a stack. Hence direct call is required.
export async function getGlobalFields(config: StackConnectionConfig, cdaHost: string) {
  try {
    return new Promise((resolve, reject) => {
      const options: any = {
        host: (REGION_URL_MAPPING as any)[config.region] || cdaHost,
        path: 'v3/global_fields?include_branch=false',
        port: 443,
        method: 'GET',
        headers: {
          api_key: config.apiKey,
          access_token: config.token,
          environment: config.environment,
        },
      }
      if (config.branch) {
        options.headers.branch = config.branch
      }
      const req = http.request(options, res => {
        res.setEncoding('utf8')
        let body = ''
        res.on('data', chunk => {
          body += chunk
        })
        res.on('end', () => {
          if (res.statusCode === 200) {
            resolve(JSON.parse(body))
          } else {
            reject(new Error('Could not connect to the stack. Please check your credentials.'))
          }
        })
      })
      req.on('error', error => {
        reject(error)
      })
      req.end()
    })
  } catch (error) {
    throw new Error('Could not connect to the stack. Please check your credentials.')
  }
}

export async function generateGraphQLTypeDef(config: StackConnectionConfig, outPath: string, namespace: string) {
  const spinner = cliux.loaderV2('Fetching graphql schema...')
  try {
    if (!GRAPHQL_REGION_URL_MAPPING[config.region]) {
      throw new Error(`GraphQL content delivery api not available for '${config.region}' region`)
    }

    const query = {
      environment: config.environment,
    }
    const headers: any = {
      access_token: config.token,
    }
    if (config.branch) {
      headers.branch = config.branch
    }

    // Generate graphql schema with introspection query
    const url = `${GRAPHQL_REGION_URL_MAPPING[config.region]}/${config.apiKey}`
    const result = await new HttpClient()
    .headers(headers)
    .queryParams(query)
    .post(url, {query: introspectionQuery})

    cliux.loaderV2('', spinner)

    let schema: string;
    if(namespace){
      schema = generateNamespace(namespace, result?.data)
    }else{
      schema = schemaToInterfaces(result?.data) 
    }
    fs.writeFileSync(outPath, schema)

    return {
      outputPath: outPath,
    }
  } catch (error: any) {
    cliux.loaderV2('', spinner)
    throw error
  }
}
