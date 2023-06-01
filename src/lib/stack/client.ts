import * as http from 'https'
import * as async from 'async'
import {ContentTypeCollection} from 'contentstack'

type RegionUrlMap = {
  [prop: string]: string;
};

const REGION_URL_MAPPING: RegionUrlMap = {
  na: 'cdn.contentstack.io',
  us: 'cdn.contentstack.io',
  eu: 'eu-cdn.contentstack.com',
  'azure-na': 'azure-na-cdn.contentstack.com',
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

export async function stackConnect(client: any, config: StackConnectionConfig) {
  try {
    const clientParams: { 
      api_key: string,
      delivery_token: string,
      environment: string,
      region: string,
      branch?: string
    } = {
      api_key: config.apiKey,
      delivery_token: config.token,
      environment: config.environment,
      region: config.region,
    }
    if (config.branch) {
      clientParams.branch = config.branch
    }
    // eslint-disable-next-line new-cap
    const stack = client(clientParams)

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
export async function getGlobalFields(config: StackConnectionConfig) {
  try {
    return new Promise((resolve, reject) => {
      const options: any = {
        host: (REGION_URL_MAPPING as any)[config.region],
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
            reject(body)
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
