import '../styles/globals.css';
import { useState, useEffect } from 'react';
import { dataContext } from '../Util/ContextData';
import axios from 'axios';
import { coinsPrices, coinsList, statsMex } from '../Util/Consts';

function MyApp({ Component, pageProps }) {
     //   Coins Fetch
     const [coins, setCoins] = useState([]);

     //   Coins Fetch
     const [coinsData, setCoinsData] = useState([]);

     //   Stats
     const [stats, setStats] = useState([]);

     // Concat
     const [concat, setConcat] = useState([]);

     useEffect(() => {
          axios.get(coinsList).then((response) => {
               setCoins(response.data);
          });
     }, []);

     useEffect(() => {
          axios.get(statsMex).then((response) => {
               setStats(response.data);
          });
     }, []);

     useEffect(() => {
          axios.get(coinsPrices)
               .then((response) => {
                    setCoinsData(response.data.filter((qwe) => qwe.baseId !== 'USDC-c76f1f' && qwe.quoteName !== 'holoride'));
               })
               .then(() => {
                    coins.map((coin, index) => coinsData.map((data, key) => (coin.identifier === data.baseId ? Object.assign(coin, { price: data.basePrice }, { volume: data.volume24h }, { mCap: data.totalValue }) : '')));
                    setConcat(coins);
               });
     }, [coins]);

     return (
          <dataContext.Provider value={{ coins, setCoins, coinsData, setCoinsData, stats, setStats, concat, setConcat }}>
               <Component {...pageProps} />
          </dataContext.Provider>
     );
}

export default MyApp;
