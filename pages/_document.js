import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
     render() {
          return (
               <Html className="'font-[inter] bg-[#0D0116] bg-fixed text-gray-200" style={{ backgroundImage: "url('./images/svgbg.svg')" }}>
                    <Head>
                         <meta charSet='utf-8' />
                         <link rel='preconnect' href='https://fonts.googleapis.com' />
                         <link rel='preconnect' href='https://fonts.gstatic.com' />
                         <link href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap' rel='stylesheet' />
                         <link rel='icon' href='/images/logo.png' />
                    </Head>
                    <body>
                         <Main />
                         <NextScript />
                    </body>
               </Html>
          );
     }
}

export default MyDocument;
