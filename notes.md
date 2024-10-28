# Setting up CLI :

1. Need node version 20+

```bash
nvm use 20
node -v
```

2. Install the cli

```bash
npm install -g @contentstack/cli
```

3. Setup the region before CLI

```bash
csdx config:set:region NA
```

4. Login to the CLI

```bash
csdx auth:login
```

5. Try some operations like `csdx cm:export-to-csv`

# Getting started with the tsgen plugin

1. Check if the following command is running :

```bash
csdx plugins:link -h
```

If error comes then install the CLI :

```bash
npm install -g @contentstack/cli
```

2. Check whether the `tsgen` plugin is already installed.

```bash
csdx plugins
```

If the plugin is already installed and version is displayed then remove that plugin

```bash
csdx plugins:remove contentstack-cli-tsgen
```

Now recheck if the plugin was removed or not - `csdx plugins`

3. Now in the root directory of `contentstack-cli-tsgen`, link the plugin to the installed CLI.

```bash
csdx plugins:link .
```

4. Now check this plugin command and the output will be served from the `src/commands/tsgen.ts` file.

```bash
csdx tsgen -h
```

5. Need to setup the delivery token to fetch the stacks data

```bash
csdx auth:tokens:add --delivery
```

```bash
? Provide alias to store token forTSgenPlugin
? Alias is already exists, do you want to replace? Yes
? Enter the api key xxxxxx
? Enter the token xxxxx
? Enter the environment name xxxx
```

The environment name will be the one which you have created in your stack for publishing entries/content types.

6. If it is running correctly then test these commands

   1. Default :

   ```bash
   csdx tsgen -a "forTSgenPlugin" -o "contentstack/generated.d.ts"
   ```

   2. Add Prefix :

   ```bash
   csdx tsgen -a "forTSgenPlugin" -o "contentstack/generated.d.ts" -p "I"
   ```

   3. Docs(default is true so lets turn it off) :

   ```bash
   csdx tsgen -a "forTSgenPlugin" -o "contentstack/generated.d.ts" --no-doc
   ```

   4. Add system fields types :

   ```bash
   csdx tsgen -a "forTSgenPlugin" -o "contentstack/generated.d.ts" --include-system-fields
   ```

   5. Add GraphQL schema typpes :

   ```bash
   csdx tsgen -a "forTSgenPlugin" -o "contentstack/generated.d.ts" --api-type graphql
   ```

   6. Add a namespace for the GraphQL API type to organize the generated types :

   ```bash
   csdx tsgen -a "forTSgenPlugin" -o "contentstack/generated.d.ts" --api-type graphql --namespace "Testing-GraphQL"
   ```
