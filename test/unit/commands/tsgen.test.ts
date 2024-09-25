import {test} from '@oclif/test'
import {configHandler} from '@contentstack/cli-utilities'

import * as mock from '../mock/common.mock.json'

const GRAPHQL_REGION_URL_MAPPING = {
  na: 'https://graphql.contentstack.com',
  us: 'https://graphql.contentstack.com',
  eu: 'https://eu-graphql.contentstack.com/stacks',
  'azure-na': 'https://azure-na-graphql.contentstack.com/stacks',
  'azure-eu': 'https://azure-eu-graphql.contentstack.com/stacks',
}

const region: { cma: string; name: string; cda: string } = configHandler.get('region')
const graphqlUrl: string = region?.name && GRAPHQL_REGION_URL_MAPPING[region.name.toLowerCase() as keyof  typeof GRAPHQL_REGION_URL_MAPPING]
const alias = 'token1'
configHandler.set(`tokens.${alias}`,  mock.tokens[alias])
const filePath = './generate1.d.ts'

describe('Tsgen command', () => {
  describe('Graphql type generator', () => {
    test
    .stdout({print: process.env.PRINT === 'true' || false})
    .nock(graphqlUrl, api =>
      api
      .post(`/stacks/${mock.tokens[alias].apiKey}?environment=development`)
      .reply(200, {
        data: mock.mock_data,
      })
    )
    .command(['tsgen', '--token-alias', alias, '--output', filePath, '--api-type', 'graphql'])
    .it('should generate a type def for graphql query')
  })

  describe('Graphql type generator with namespace', () => {
    test
    .stdout({print: process.env.PRINT === 'true' || false})
    .nock(graphqlUrl, api =>
      api
      .post(`/stacks/${mock.tokens[alias].apiKey}?environment=development`)
      .reply(200, {
        data: mock.mock_data,
      })
    )
    .command(['tsgen', '--api-type', 'graphql', '-a', alias, '--output', filePath, '--namespace', 'GraphQL'])
    .it('should generate a type def for graphql query with namespace')
  })
})
