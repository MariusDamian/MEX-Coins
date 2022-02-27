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

     // Concat
     const [concat, setConcat] = useState([]);

     useEffect(() => {
          axios.get(coinsPrices).then((response) => {
               setCoinsData(response.data.filter((qwe) => qwe.baseId !== 'USDC-c76f1f'));
               console.log('Called Prices');
          });
     }, []);

     useEffect(() => {
          axios.get(coinsList).then((response) => {
               setCoins(response.data);
               console.log('Called Social');
          });
     }, []);

     useEffect(() => {
          coins.map((coin, index) => coinsData.map((ceva, key) => (coin.identifier === ceva.baseId ? Object.assign(coin, { price: ceva.basePrice }, { volume: ceva.volume24h }) : '')));
          setConcat(coins);
          console.table(concat);
     }, [coinsData]);

     return (
          <div className='mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center '>
               <div className='flex w-full flex-col '>
                    <div className='flex h-14 flex-row items-center space-y-1 border-b border-neutral-700/60 text-lg'>
                         <p className='w-8 text-left  text-sm'>#</p>
                         <p className='ml-2 w-36 text-left'>Name</p>
                         <p className='ml-2 w-36 text-left'>Price</p>
                         <p className='ml-2 w-36 text-left'>Volume</p>
                    </div>
                    {concat?.map((coin, index) => (
                         <div key={index} className='flex h-16 flex-row items-center space-y-1 border-b border-neutral-700/60'>
                              <p className='w-8 text-left  text-sm'>{index + 1}</p>
                              <img src={coin.assets?.svgUrl} className='w-6 rounded-full' />
                              <p className='ml-2 w-32 text-left'>{coin.ticker}</p>
                              <p className='ml-2 w-32 text-left'>${coin?.price?.toFixed(2) ?? 'N/A'}</p>
                              <p className='ml-2 w-32 text-left'>${coin?.volume?.toFixed(0) ?? 'N/A'}</p>
                         </div>
                    ))}
               </div>
          </div>
     );
}

export default HomePage;
