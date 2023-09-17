import Document, { Html, Head, Main, NextScript } from 'next/document';

/*
 * <Main></Main>
 * Aloja la app de next
 *
 * <NextScript></NextScript>
 * Se encarga de esplegar los scripts que genera Next
 *
 */

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main /> 
          <NextScript></NextScript>
        </body>
      </Html>
    )
  }
}

export default MyDocument;
