import { FC } from 'react';

import { Footer, Layout } from '@/components';
import Hero from '@/components/hero';
// import Tokenomics from '@/components/tokenomics';
import Socials from '@/components/socials';

const Home: FC = () => (
  <Layout>
    <Hero />
    {/* <Tokenomics /> */}
    <Socials />
    <Footer />
  </Layout>
);

export default Home;
