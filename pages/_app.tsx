import 'nextra-theme-blog/style.css'
import type { AppProps } from 'next/app'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import Head from 'next/head'
import '../styles/main.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Analytics />
      <SpeedInsights />
      <Component {...pageProps} />
    </>
  )
}
