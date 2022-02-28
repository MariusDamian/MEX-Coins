import '../styles/globals.css';
import { useState, useEffect } from 'react';
import { dataContext } from '../Util/ContextData';
import axios from 'axios';

function MyApp({ Component, pageProps }) {
     //   Coins Fetch
     let coinsList = 'https://api.elrond.com/tokens';
     const [coins, setCoins] = useState([]);

     //   Coins Fetch
     let coinsPrices = 'https://api.elrond.com/mex-pairs';
     const [coinsData, setCoinsData] = useState([]);

     //   Stats
     let statsMex = 'https://api.elrond.com/stats';
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
               console.log(stats);
          });
     }, []);

     useEffect(() => {
          axios.get(coinsPrices)
               .then((response) => {
                    setCoinsData(response.data.filter((qwe) => qwe.baseId !== 'USDC-c76f1f'));
               })
               .then(() => {
                    coins.map((coin, index) => coinsData.map((data, key) => (coin.identifier === data.baseId ? Object.assign(coin, { price: data.basePrice }, { volume: data.volume24h }) : '')));
                    setConcat(coins);
               });
     }, [coins]);

     return (
          <dataContext.Provider value={{ coins, setCoins, coinsData, setCoinsData, stats, setStats, concat, setConcat }}>
               <Component {...pageProps} />;
          </dataContext.Provider>
     );
}

export default MyApp;
