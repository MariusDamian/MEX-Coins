export const formatCash = (n) => {
     if (n < 1e3) return n;
     if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(0) + ' K';
     if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(2) + ' Mil';
     if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(2) + ' Bil';
     if (n >= 1e12) return +(n / 1e12).toFixed(2) + ' Tril';
};

export const coinsList = 'https://api.elrond.com/tokens?size=43';
export const coinsPrices = 'https://api.elrond.com/mex-pairs';
export const statsMex = 'https://api.elrond.com/stats';
