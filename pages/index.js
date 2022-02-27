import Head from 'next/head';
import HomePage from '../components/HomePage';

export default function Home() {
     return (
          <div>
               <Head>
                    <title>Mex Coins</title>
                    <meta name='description' content='Mex Coins' />
               </Head>
               <HomePage />
          </div>
     );
}
