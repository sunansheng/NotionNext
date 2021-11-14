import Document, { Html, Head, Main, NextScript } from 'next/document'
import BLOG from '@/blog.config'
import ThirdPartyScript from '@/components/ThirdPartyScript'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang={BLOG.lang}>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
          <ThirdPartyScript />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
