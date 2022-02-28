import React from 'react';
import Link from 'next/link';

function Navbar() {
     return (
          <div className='mb-24'>
               <div className='fixed flex h-16 w-full flex-row items-center justify-center border-b border-violet-900/70 bg-black/30 backdrop-blur-sm'>
                    <div className='flex w-full max-w-6xl flex-row items-center justify-between'>
                         <Link href={'/'}>
                              <a href='' className='flex flex-row items-end justify-center'>
                                   <img src='./images/logo.png' alt='' className='w-12 cursor-pointer' />
                                   <p className='ml-2 -mb-1 text-3xl font-bold text-violet-500'>Avchain</p>
                              </a>
                         </Link>
                         <div className='flex flex-row items-center justify-center space-x-10'>
                              <a href='https://maiar.exchange/' target='_blank' rel='noreferrer' className='hover:text-violet-400'>
                                   Maiar Exchange
                              </a>
                              <a href='https://elrond.com/' target='_blank' rel='noreferrer' className='hover:text-violet-400'>
                                   Elrond
                              </a>
                              <a href='http://bit.ly/MaiarDMN' target='_blank' rel='noreferrer' className='hover:text-violet-400'>
                                   Buy
                              </a>
                         </div>
                    </div>
               </div>
               ;
          </div>
     );
}

export default Navbar;
