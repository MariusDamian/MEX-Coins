import React from 'react';
import { useContext } from 'react';
import { dataContext } from '../Util/ContextData';
import { useRouter } from 'next/router';
import { BsTelegram, BsTwitter } from 'react-icons/bs';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';

function CoinPage() {
     const router = useRouter();
     const { coins } = router.query;
     const { concat } = useContext(dataContext);

     let currentCoin = concat.find((coin) => coin.ticker === coins);
     return (
          <div className='mx-auto flex min-h-[600px] max-w-6xl flex-col rounded-lg bg-violet-900/10 p-10'>
               <div className='flex flex-row items-center'>
                    <img src={currentCoin?.assets.svgUrl} alt='' className='w-20 rounded-full' />
                    <div className='ml-3 flex flex-col'>
                         <p className='mb-1 text-4xl font-semibold'>{currentCoin?.name}</p>
                         <p className='w-min rounded-md bg-gray-700 px-2 text-white'>{currentCoin?.ticker}</p>
                    </div>
               </div>
               <div className='mt-4 flex flex-row space-x-5'>
                    {currentCoin?.assets?.website ? (
                         <a href={currentCoin?.assets?.website} target='_blank' rel='noreferrer'>
                              <FaExternalLinkSquareAlt className='text-2xl hover:text-violet-400' />
                         </a>
                    ) : (
                         ''
                    )}
                    {currentCoin?.assets?.social?.twitter ? (
                         <a href={currentCoin?.assets?.social?.twitter} target='_blank' rel='noreferrer'>
                              <BsTwitter className='text-2xl hover:text-violet-400' />
                         </a>
                    ) : (
                         ''
                    )}
                    {currentCoin?.assets?.social?.telegram ? (
                         <a href={currentCoin?.assets?.social?.telegram} target='_blank' rel='noreferrer'>
                              <BsTelegram className='text-2xl hover:text-violet-400' />
                         </a>
                    ) : (
                         ''
                    )}
               </div>
               <p className='mt-5 text-2xl font-semibold'>Current Price - ${currentCoin?.price?.toFixed(3)}</p>
               <p className='mt-3 max-w-2xl text-lg'>{currentCoin?.assets?.description}</p>
          </div>
     );
}

export default CoinPage;
