import Head from 'next/head';
import HomePage from '../components/HomePage';
import Navbar from '../components/Navbar';

export default function Home() {
     return (
          <div className='mb-20'>
               <Head>
                    <title>Avchain | Maiar Exchange Coins</title>
                    <meta name='description' content='Maiar Exchange Coins' />
               </Head>
               <Navbar />
               <HomePage />
          </div>
     );
}
