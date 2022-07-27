import type { NextPage } from 'next';
import Campuses from '../components/campuses/Campuses';
import Events from '../components/events/Events';
import Hero from '../components/hero/Hero';
import Info from '../components/info/Info';
import Mission from '../components/mission/Mission';

const Home: NextPage = () => {
  return (
    <main>
      <Hero />
      <Campuses />
      <Mission />
      <Events />
      <Info />
    </main>
  );
};

export default Home;
