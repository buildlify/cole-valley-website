import s from './mission.module.scss';

const Mission = () => {
  return (
    <section className={s.container}>
      <h2>Our Mission</h2>
      <p>
        Partnering with Christian families to <span>shepherd</span> and challenge our students
        toward their individual potential to impact the world for Christ.
      </p>
      <button className={s.button}>What We Believe</button>
    </section>
  );
};

export default Mission;
