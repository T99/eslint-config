# `@t99/eslint-config`

A repository for keeping track of all of my ESLint configuration files.

### [Find @t99/eslint-config on NPM.](https://www.npmjs.com/package/@t99/eslint-config)

## Table of Contents

- [Installation](#installation)
- [License](#license)

## Installation

Install from NPM with

```
$ npm install --save-dev @t99/eslint-config
```

Then, add it to your local ESLint config:

##### For JS/CJS Configs (`.eslintrc.js`/`.eslintrc.cjs`):
```js
module.exports = {
    extends: [
        "@t99"
    ]
}
```

##### For JSON Configs (`.eslintrc.json`):
```json
{
    "extends": [
        "@t99"
    ]
}
```

##### For YAML/YML Configs (`.eslintrc.yaml`/`.eslintrc.yml`):
```yaml
extends:
    @t99
```

### TypeScript Installation

Additionally, for TypeScript projects, you will need to configure the path to
your project's `tsconfig.json`. Extending this package will take care of all
other necessary setup for usage with TypeScript.

##### For JS/CJS Configs (`.eslintrc.js`/`.eslintrc.cjs`):
```js
module.exports = {
    extends: [
        "@t99"
    ],
    parserOptions: {
        project: "path/to/tsconfig.json"
    }
}
```

##### For JSON Configs (`.eslintrc.json`):
```json
{
    "extends": [
        "@t99"
    ],
    "parserOptions": {
        "project": "path/to/tsconfig.json"
    }
}
```

##### For YAML/YML Configs (`.eslintrc.yaml`/`.eslintrc.yml`):
```yaml
extends:
    @t99
parserOptions:
    project: "path/to/tsconfig.json"
```

## Building Your Own Shareable ESLint Config Repo/Package

Check out the official ESLint guide on doing so [here](https://eslint.org/docs/latest/developer-guide/shareable-configs).

## License

@t99/eslint-config is made available under the GNU General Public License v3.

Copyright (C) 2022 Trevor Sears
