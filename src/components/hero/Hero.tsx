import s from './hero.module.scss';

const Hero = () => {
  return (
    <section className={s.container}>
      <h1>Preparing The Next Generation</h1>
      <p>By Developing the Whole Person to Impact the World for Christ</p>
      <div>
        <button>Enroll Now</button>
        <button>About</button>
      </div>
    </section>
  );
};

export default Hero;
