import Document, { Head, Main, NextScript } from 'next/document';
import cxs from 'cxs';

const cx = {
  html: cxs({
    fontSize: '62.5%',
    fontFamily: 'Roboto, sans-serif'
  })
};

export default class extends Document {

  static getInitialProps ({ renderPage }) {
    const page = renderPage();
    let style = cxs.getCss();
    return { ...page, style };
  }

  render () {
    return (
      <html className={cx.html}>

      <Head>
        <title>Sunny Heating &amp; Cooling</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <link rel="stylesheet" type="text/css" href="/static/reset.css" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: this.props.style }} />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
      </html>
    )
  }
}