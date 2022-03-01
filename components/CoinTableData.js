import useSWR from 'swr';
import { useState, useEffect } from 'react';
import { dataContext } from '../Util/ContextData';
import axios from 'axios';
import { coinsPrices, coinsList, statsMex } from '../Util/Consts';

const fetcher = async () => {
     const coinss = await fetch(coinsList);
     const data = await coinss.json();
     setCoins(data);
};
function TableCoins() {

     const { coins } = useSWR('tableCoins', fetcher);
     return (
          <div>
               <p>Test</p>
          </div>
     );
}

export default TableCoins;
