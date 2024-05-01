import { A, Div, Img } from '@stylin.js/elements';
import { FC } from 'react';

const Socials: FC = () => (
  <Div display="flex" justifyContent="center" gap="0.5rem" mb="1rem">
    <A
      target="_blank"
      rel="noreferer, noopener"
      href="https://twitter.com/AndlewTote"
      transition="transform 300ms ease-in-out"
      nHover={{ transform: 'scale(1.3)' }}
    >
      <Img width="5rem" src="/img/x.webp" alt="X" />
    </A>
    <A
      target="_blank"
      rel="noreferer, noopener"
      href="https://t.me/andlewtote"
      transition="transform 300ms ease-in-out"
      nHover={{ transform: 'scale(1.3)' }}
    >
      <Img width="5rem" src="/img/tg.webp" alt="Coin Market Cap" />
    </A>
    <A
      target="_blank"
      rel="noreferer, noopener"
      href="https://birdeye.so/token/Hg5V6Mrp4dyt2UKCvbJAP2dEqSur6i8sA39agt51Fj45?chain=solana"
      transition="transform 300ms ease-in-out"
      nHover={{ transform: 'scale(1.3)' }}
    >
      <Img width="5rem" src="/img/birdeye.webp" alt="Birdeye" />
    </A>
    {/* <A
        target="_blank"
        rel="noreferer, noopener"
        href="#"
        transition="transform 300ms ease-in-out"
        nHover={{ transform: 'scale(1.3)' }}
      >
        <Img width="5rem" src="/img/coingecko.webp" alt="Coin Gecko" />
      </A> */}
    {/* <A
      target="_blank"
      rel="noreferer, noopener"
      href="#"
      transition="transform 300ms ease-in-out"
      nHover={{ transform: 'scale(1.3)' }}
    >
      <Img width="5rem" src="/img/coinmarketcap.webp" alt="Coin Market Cap" />
    </A> */}
    {/* <A
      target="_blank"
      rel="noreferer, noopener"
      href="#"
      transition="transform 300ms ease-in-out"
      nHover={{ transform: 'scale(1.3)' }}
    >
      <Img width="5rem" src="/img/dexscreener.webp" alt="Dex Screener" />
    </A> */}
    {/* <A
      target="_blank"
      rel="noreferer, noopener"
      href="#"
      transition="transform 300ms ease-in-out"
      nHover={{ transform: 'scale(1.3)' }}
    >
      <Img width="5rem" src="/img/dextools.webp" alt="Dex Tools" />
    </A> */}
  </Div>
);

export default Socials;
