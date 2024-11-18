const { resolve } = require('path')

const defaultOptions = {
  apiKey: null,
  projectId: null,
  locationId: 'global',
  catalogId: 'default_catalog',
  debug: false
}

module.exports = function (moduleOptions) {
  const options = {
    ...defaultOptions,
    ...this.options['nuxt-gre-pixel-module'],
    ...moduleOptions
  }
  const skip = this.options.dev && !options.debug

  if (!options.apiKey) {
    // eslint-disable-next-line no-console
    console.error('apiKey is required for Google Retail Pixel')
    return
  }
  if (!options.projectId) {
    // eslint-disable-next-line no-console
    console.error('projectId is required for Google Retail Pixel')
    return
  }

  if (skip) {
    // eslint-disable-next-line no-console
    console.log('Skipping Google Retail Pixel in development')
    return
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-gre-pixel-module.js',
    options
  })
}

module.exports.meta = require('../package.json')
