# nuxt-gre-pixel-module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> A nuxt module for integrating event pixel for Vertex AI Search for retail

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `nuxt-gre-pixel-module` dependency to your project

```bash
yarn add nuxt-gre-pixel-module # or npm install nuxt-gre-pixel-module
```

2. Add `nuxt-gre-pixel-module` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxt-gre-pixel-module',

    // With options
    ['nuxt-gre-pixel-module', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) William Chong <me@williamchong.cloud>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-gre-pixel-module/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-gre-pixel-module

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-gre-pixel-module.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-gre-pixel-module

[github-actions-ci-src]: https://github.com/williamchong/nuxt-gre-pixel-module/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/williamchong/nuxt-gre-pixel-module/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/williamchong/nuxt-gre-pixel-module.svg
[codecov-href]: https://codecov.io/gh/williamchong/nuxt-gre-pixel-module

[license-src]: https://img.shields.io/npm/l/nuxt-gre-pixel-module.svg
[license-href]: https://npmjs.com/package/nuxt-gre-pixel-module
