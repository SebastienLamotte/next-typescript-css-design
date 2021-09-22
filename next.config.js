/** @type {import('next').NextConfig} */

module.exports = (phase, {defaultConfig}) => {
  if ('sassOptions' in defaultConfig) {
      defaultConfig['sassOptions'] = {
          prependData: `@import "~@styles/base.scss";`,
      }
  }
  defaultConfig.reactStrictMode = true
  return defaultConfig;
}