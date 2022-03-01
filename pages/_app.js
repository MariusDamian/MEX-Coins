import '../styles/globals.css';
import { useState, useEffect } from 'react';
import { dataContext } from '../Util/ContextData';
import axios from 'axios';
import useSWR from 'swr';
import { coinsPrices, coinsList, statsMex, socialFetcher, priceFetcher } from '../Util/Consts';

function MyApp({ Component, pageProps }) {
     const { data: socialData } = useSWR('tableCoins', socialFetcher);
     const { data: priceData } = useSWR('priceCoins', priceFetcher);

     const [coinsSocial, setCoinsSocial] = useState([]);

     useEffect(() => {
          setCoinsSocial(socialData);
     }, [socialData]);

     const [coinsData, setCoinsData] = useState([]);

     useEffect(() => {
          setCoinsData(priceData);
     }, [priceData]);

     const [stats, setStats] = useState([]);

     useEffect(() => {
          axios.get(statsMex).then((response) => {
               setStats(response.data);
          });
     }, []);

     return (
          <dataContext.Provider value={{ coinsSocial, setCoinsSocial, coinsData, setCoinsData, stats, setStats }}>
               <Component {...pageProps} />
          </dataContext.Provider>
     );
}

export default MyApp;
