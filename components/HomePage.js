import React from 'react';
import { useContext } from 'react';
import { dataContext } from '../Util/ContextData';
import Link from 'next/link';

function HomePage() {
     const { concat, stats } = useContext(dataContext);

     return (
          <div className='mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-start  text-center'>
               <div className='mb-3 flex w-full flex-row items-start space-x-6 font-semibold'>
                    <p>Accounts {stats.accounts}</p>
                    <p>Transactions {stats.transactions}</p>
                    <p>Epoch {stats.epoch}</p>
               </div>
               <div className='flex w-full flex-col'>
                    <div className='flex h-12 flex-row items-center space-y-1 rounded-t-lg bg-violet-900/75 px-5 text-lg'>
                         <p className='w-4 text-base'>#</p>
                         <p className='ml-2 w-36 '>Name</p>
                         <p className='ml-2 w-36 '>Price</p>
                         <p className='ml-2 w-36 '>Volume(24h)</p>
                    </div>
                    {concat?.map((coin, index) => (
                         <div key={index} className='flex h-16 flex-row items-center space-y-1 border-b border-violet-700/40 bg-violet-900/10 px-5'>
                              <p className='w-4  text-sm'>{index + 1}</p>
                              <Link href={coin.ticker}>
                                   <a className='flex flex-row items-center justify-center'>
                                        <img src={coin.assets?.svgUrl} className='ml-9 w-7 rounded-full' />
                                        <p className='ml-2 w-20 text-left text-lg hover:text-violet-400'>{coin.ticker}</p>
                                   </a>
                              </Link>
                              <p className='ml-2 w-36 '>{coin?.price?.toFixed(4) ?? '-'}</p>
                              <p className='ml-2 w-36 '>{coin.volume ? ` $${coin?.volume?.toLocaleString('en-US', { maximumFractionDigits: 0 })} ` : ''}</p>
                         </div>
                    ))}
               </div>
          </div>
     );
}

export default HomePage;
