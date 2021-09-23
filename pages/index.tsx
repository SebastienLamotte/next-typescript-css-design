import type { NextPage } from 'next';
import React from 'react';
import Header from '../components/layout/header/header';
import About from 'components/layout/about/about';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <About />
      </main>
    </>
  );
};

export default Home;
