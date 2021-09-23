/** @type {import('next').NextConfig} */

module.exports = (phase, {defaultConfig}) => {
  if ('sassOptions' in defaultConfig) {
      defaultConfig['sassOptions'] = {
          prependData: `@import "~@styles/main.scss";`,
      }
  }
  defaultConfig.reactStrictMode = true
  return defaultConfig;
}