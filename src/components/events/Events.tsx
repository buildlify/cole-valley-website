import Link from 'next/link';
import s from './events.module.scss';

const Events = () => {
  return (
    <section className={s.container}>
      <h2>Upcoming Events</h2>

      <div className={s.grid}>
        <div className={s.card}>
          <img src='/event-1-test.jpg' alt='' />
          <h5>Event Title</h5>
          <span>Event Date</span>
        </div>
        <div className={s.card}>
          <img src='/event-2-test.jpg' alt='' />
          <h5>Event Title</h5>
          <span>Event Date</span>
        </div>
        <div className={s.card}>
          <img src='/event-3-test.jpg' alt='' />
          <h5>Event Title</h5>
          <span>Event Date</span>
        </div>
      </div>
      <Link href='/' className={s.link}>
        View Full Event Calendar
      </Link>
    </section>
  );
};

export default Events;
