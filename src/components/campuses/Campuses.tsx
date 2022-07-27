import Link from 'next/link';
import s from './campuses.module.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Campuses = () => {
  return (
    <section className={s.container}>
      <div className={s.box}>
        <h3>Elementary</h3>
        <p>
          Cole Valley Christian Elementary&apos;s unique multi-sensory, small group academic
          approach, based on rotation to separate specialty teachers, allows students to learn at
          their individual level in a dynamic biblically-based community.
        </p>
        <Link href='/'>
          <div className={s.linkContainer}>
            Learn More <ArrowForwardIcon style={{ marginLeft: 3 }} />
          </div>
        </Link>
      </div>
      <div className={s.box}>
        <h3>High School</h3>
        <p>
          Our high school campus is an environment in which our students are individually known – we
          desire to know our students so we can challenge them spiritually, academically, and
          relationally.
        </p>
        <Link href='/'>
          <div className={s.linkContainer}>
            Learn More <ArrowForwardIcon style={{ marginLeft: 3 }} />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Campuses;
