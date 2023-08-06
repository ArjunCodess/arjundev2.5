import { Suspense } from 'react'
import '../styles/globals.css'
import Loading from './components/loading'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Suspense fallback={Loading}>
        <Component {...pageProps} />
      </Suspense>
    </>
  )
}

export default MyApp
