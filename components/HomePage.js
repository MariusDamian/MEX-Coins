import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
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
               console.log('Called Social');
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
                    console.log('Called Stats');
               })
               .then(() => {
                    coins.map((coin, index) => coinsData.map((ceva, key) => (coin.identifier === ceva.baseId ? Object.assign(coin, { price: ceva.basePrice }, { volume: ceva.volume24h }) : '')));
                    setConcat(coins);
                    console.log('Concatenare');
               });
     }, [coins]);

     return (
          <div className='mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center  text-center'>
               <div className='mt-10 mb-3 flex w-full flex-row items-start space-x-4 font-semibold'>
                    <p>Accounts {stats.accounts}</p>
                    <p>Transactions {stats.transactions}</p>
                    <p>Epoch {stats.epoch}</p>
               </div>
               <div className='flex w-full flex-col'>
                    <div className='flex h-12 flex-row items-center space-y-1 rounded-lg bg-violet-900 px-5 text-lg font-extralight'>
                         <p className='w-8   text-sm'>#</p>
                         <p className='ml-2 w-36 '>Name</p>
                         <p className='ml-2 w-36 '>Price</p>
                         <p className='ml-2 w-36 '>Volume(24h)</p>
                    </div>
                    {concat?.map((coin, index) => (
                         <div key={index} className='flex h-16 flex-row items-center space-y-1 border-b border-violet-700/60 px-5 font-semibold'>
                              <p className='w-8  text-sm'>{index + 1}</p>
                              <img src={coin.assets?.svgUrl} className='ml-9 w-6 rounded-full' />
                              <p className='ml-2 w-20 text-left'>{coin.ticker}</p>
                              <p className='ml-2 w-36 '>${coin?.price?.toFixed(2) ?? '-'}</p>
                              <p className='ml-2 w-36 '>${coin?.volume?.toLocaleString('en-US', { maximumFractionDigits: 0 }) ?? '-'}</p>
                         </div>
                    ))}
               </div>
          </div>
     );
}

export default HomePage;
