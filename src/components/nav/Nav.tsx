import Link from 'next/link';
import s from './nav.module.scss';

const Nav = () => {
  return (
    <nav className={s.container}>
      <img src='/icons/logo.png' className={s.logo} />
      <div className={s.links}>
        <Link href='/'>About</Link>
        <Link href='/'>Admissions</Link>
        <Link href='/'>Academics</Link>
        <Link href='/'>Student Life</Link>
        <Link href='/'>Athletics</Link>
        <Link href='/'>Art</Link>
        {/* <Link href='/'>Support</Link> */}
      </div>
    </nav>
  );
};

export default Nav;
