import { A, Button, Code, Div, H1, Header, Img, P } from '@stylin.js/elements';
import { FC } from 'react';

import HeroAnimation from './hero-animation';

const Hero: FC = () => (
  <Header
    my="5rem"
    mx="auto"
    gap="5rem"
    display="flex"
    maxWidth="1024px"
    alignItems="center"
    justifyContent="center"
  >
    <Div
      p="2rem"
      gap="2rem"
      display="flex"
      textAlign="center"
      alignItems="center"
      flexDirection="column"
    >
      <HeroAnimation />
      <H1 title="Andlew Tote" aria-label="Andlew Tote">
        <Img height="15rem" src="/img/logo.webp" alt="Andlew Tote" />
      </H1>
      <P fontSize="1.8rem" maxWidth="40rem">
        $TOTE has no intrinsic value, it is a community and culture token. No
        Promises, No Utility, Purely For {"Brokie's "}
        Entertainment
      </P>
      <P>
        ✅ CA:<Code>Hg5V6Mrp4dyt2UKCvbJAP2dEqSur6i8sA39agt51Fj45</Code>
      </P>
      <Button
        all="unset"
        p="1rem"
        gap="1rem"
        bg="#E80"
        display="flex"
        alignItems="center"
        py="1rem"
        px="2rem"
        cursor="pointer"
        fontSize="2rem"
        fontFamily="GochiHand"
        boxShadow="10px 10px 1px #000"
        transition="transform 300ms ease-in-out"
        nHover={{ transform: 'scale(1.1)' }}
      >
        <Img width="3rem" src="/img/pump.webp" alt="Pump" />
        <A
          target="_blank"
          rel="noreferrer, noopener"
          href="https://pump.fun/Hg5V6Mrp4dyt2UKCvbJAP2dEqSur6i8sA39agt51Fj45"
        >
          BUY NOW
        </A>
        <Img width="3rem" src="/img/solana.webp" alt="Solana" />
      </Button>
    </Div>
  </Header>
);

export default Hero;
