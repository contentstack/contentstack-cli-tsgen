"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_request_1 = require("graphql-request");
const graphql_introspection_1 = require("./graphql-introspection");
function getSdl(token) {
    const endpoint = `https://graphql.contentstack.com/stacks/${token.apiKey}?environment=${token.environment}`;
    const client = new graphql_request_1.GraphQLClient(endpoint, { headers: {
            access_token: token.token,
        } });
    return client.request(graphql_introspection_1.default);
}
exports.default = getSdl;
