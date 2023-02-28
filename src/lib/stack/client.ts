import * as http from 'https'

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
}

export async function stackConnect(client: any, config: StackConnectionConfig) {
  try {
    // eslint-disable-next-line new-cap
    const stack = client(
      config.apiKey,
      config.token,
      config.environment,
      config.region
    )

    const results = await stack.getContentTypes({
      include_global_field_schema: true,
    })

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
        },
      }
      const req = http.request(options, res => {
        res.setEncoding('utf8')
        let body = ''
        res.on('data', chunk => {
          body += chunk
        })
        res.on('end', () => {
          if (res.statusCode === 200) {
            try {
              resolve(JSON.parse(body))
            } catch (error) {
              reject('Parse error')
            }
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
