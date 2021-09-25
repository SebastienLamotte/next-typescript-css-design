import type { NextPage } from 'next';
import Head from 'next/head';
import Navigation from 'components/layout/navigation/navigation';
import Header from 'components/layout/header/header';
import About from 'components/layout/about/about';
import Features from 'components/layout/features/features';
import Tours from 'components/layout/tours/tours';
import Stories from 'components/layout/stories/stories';
import Booking from 'components/layout/booking/booking';
import Footer from 'components/layout/footer/footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Natours | Exciting tours for adventurous people</title>
      </Head>
      <Navigation />
      <Header />
      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
        <Booking />
      </main>
      <Footer />
    </>
  );
};

export default Home;
