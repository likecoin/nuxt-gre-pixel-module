# nuxt-gre-pixel-module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> A nuxt module for integrating event pixel for Vertex AI Search for retail

Please refer to the [official documentation](https://cloud.google.com/generative-ai-app-builder/docs/record-user-events#record-with-javascript-pixel) for more information on how to use the retail event pixel.

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
    "nuxt-gre-pixel-module",

    // With options
    [
      "nuxt-gre-pixel-module",
      {
        /* module options */
        apiKey: "your-google-cloud-api-credentials-key",
        projectId: "your-google-cloud-project-id",
        locationId: "global",
        catalogId: "default_catalog",
        debug: false,
      },
    ],
  ];
}
```

Please refer to the [official documentation](https://cloud.google.com/generative-ai-app-builder/docs/record-user-events#create-key) on how to obtain the `apiKey` for retail event pixel.

## Usage

### Set visitor ID (Required)

```js
this.$gre.setVisitorId("visitor-id");
```

### Set user ID (Optional)

```js
this.$gre.setUserId("user-id");
```

### Record event

```js
this.$gre.logEvent("search", {
  searchQuery: "search this",
  pageCategories: ["category > subcategory"],
  productDetails: [
    {
      product: { id: "item-id" },
      quantity: 1,
    },
  ],
});
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
