#!/usr/bin/env node

(async () => {
    const {execute} = require('@contentstack/cli-utilities')
    await execute({ type: 'cjs', dir: __dirname })
})()