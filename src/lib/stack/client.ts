export type StackConnectionConfig = {
  apiKey: string;
  token: string;
  region: string;
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
