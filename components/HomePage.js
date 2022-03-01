import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { dataContext } from '../Util/ContextData';
import Link from 'next/link';
import { formatCash } from '../Util/Consts';

function HomePage() {
     const { coinsSocial, stats, coinsData } = useContext(dataContext);

     return (
          <div className='mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-start  text-center'>
               <h1 className='mb-2 w-full text-left text-2xl'>Stats</h1>
               <div className='mb-3 flex w-full flex-row items-start space-x-6 font-semibold'>
                    <p>Accounts {formatCash(stats?.accounts)}</p>
                    <p>Transactions {formatCash(stats?.transactions)}</p>
                    <p>Epoch {stats?.epoch}</p>
               </div>
               <h1 className='mb-2 mt-5 w-full text-left text-2xl'>Tokens</h1>
               <div className='flex w-full flex-col'>
                    <div className='flex h-12 flex-row items-center space-y-1 rounded-t-lg bg-violet-900/75 px-5 text-lg'>
                         <p className='w-4 text-base'>#</p>
                         <p className='ml-2 w-36 '>Name</p>
                         <p className='ml-2 w-36 '>Price</p>
                         <p className='ml-2 w-36 '>Volume(24h)</p>
                         <p className='ml-2 w-36 '>Market Cap</p>
                    </div>
                    {coinsSocial?.map((coin, index) => (
                         <div key={index} className='flex h-16 flex-row items-center space-y-1 border-b border-violet-700/40 bg-violet-900/10 px-5'>
                              <p className='w-4  text-sm'>{index + 1}</p>
                              <Link href={coin.ticker}>
                                   <a className='flex flex-row items-center justify-center'>
                                        <img src={coin.assets?.svgUrl} className='ml-9 w-7 rounded-full' />
                                        <p className='ml-2 w-20 text-left text-lg hover:text-violet-400'>{coin.ticker}</p>
                                   </a>
                              </Link>
                              <p className='ml-2 w-36 '>{coinsData.find((price) => price.baseId === coin.identifier)?.basePrice?.toFixed(2)}</p>
                              <p className='ml-2 w-36 '>{formatCash(coinsData.find((price) => price.baseId === coin.identifier)?.volume24h)}</p>
                              <p className='ml-2 w-36 '>{formatCash(coinsData.find((price) => price.baseId === coin.identifier)?.totalValue)}</p>
                         </div>
                    ))}
               </div>
          </div>
     );
}

export default HomePage;
