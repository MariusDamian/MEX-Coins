import Head from 'next/head';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { dataContext } from '../Util/ContextData';
import CoinPage from '../components/CoinPage';

export default function Home() {
     const router = useRouter();
     const { coins } = router.query;
     const { concat } = useContext(dataContext);

     let currentCoin = concat.find((coin) => coin.ticker === coins);

     return (
          <div>
               <Head>
                    <title>{currentCoin?.ticker} | Maiar Exchange Coins</title>
                    <meta name='description' content='Maiar Exchange Coins' />
               </Head>
               <Navbar />
               <CoinPage />
          </div>
     );
}
