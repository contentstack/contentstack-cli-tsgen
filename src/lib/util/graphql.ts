import {GraphQLClient} from 'graphql-request'
import {default as query} from './graphql-introspection'

export default function getSdl(token: any) {
  const endpoint = `https://graphql.contentstack.com/stacks/${token.apiKey}?environment=${token.environment}`
  const client = new GraphQLClient(endpoint, {headers: {
    access_token: token.token,
  }})

  return client.request(query)
}

