import type { AppProps } from 'next/app'

import "../styles/scss/global.scss"
import "../styles/css/icon-font.css"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
