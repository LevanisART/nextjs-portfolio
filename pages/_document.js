import Document, { Html, Head, Main, NextScript } from 'next/document';
import MessengerCustomerChat from 'react-messenger-customer-chat';

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
          <MessengerCustomerChat
            pageId="344694659052964"
            appId="578347402965408"
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument
