import s from './footer.module.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={s.container}>
      <div className={s.links}>
        <div className={s.group}>
          <h5>About</h5>
          <Link href='/'>Link</Link>
          <Link href='/'>Link</Link>
          <Link href='/'>Link</Link>
          <Link href='/'>Link</Link>
          <Link href='/'>Link</Link>
          <Link href='/'>Link</Link>
        </div>
        <div className={s.group}>
          <h5>Admissions</h5>
          <Link href='/'>Link</Link>
          <Link href='/'>Link</Link>
          <Link href='/'>Link</Link>
          <Link href='/'>Link</Link>
          <Link href='/'>Link</Link>
          <Link href='/'>Link</Link>
        </div>
        <div className={s.group}>
          <h5>Academics</h5>
          <Link href='/'>Link</Link>
          <Link href='/'>Link</Link>
          <Link href='/'>Link</Link>
          <Link href='/'>Link</Link>
          <Link href='/'>Link</Link>
          <Link href='/'>Link</Link>
        </div>
        <div className={s.group}>
          <h5>Student Life</h5>
          <Link href='/'>Link</Link>
          <Link href='/'>Link</Link>
          <Link href='/'>Link</Link>
          <Link href='/'>Link</Link>
          <Link href='/'>Link</Link>
          <Link href='/'>Link</Link>
        </div>
        <div className={s.group}>
          <h5>Athletics</h5>
          <Link href='/'>Link</Link>
          <Link href='/'>Link</Link>
          <Link href='/'>Link</Link>
          <Link href='/'>Link</Link>
          <Link href='/'>Link</Link>
          <Link href='/'>Link</Link>
        </div>
        <div className={s.group}>
          <h5>Arts</h5>
          <Link href='/'>Link</Link>
          <Link href='/'>Link</Link>
          <Link href='/'>Link</Link>
          <Link href='/'>Link</Link>
          <Link href='/'>Link</Link>
          <Link href='/'>Link</Link>
        </div>
      </div>
      <img src='/icons/logo-small.png' alt='Cole Valley Christian Schools Logo' />
      <div className={s.social}>
        <InstagramIcon />
        <FacebookIcon />
        <YouTubeIcon style={{ fontSize: '2.8rem' }} />
      </div>
    </footer>
  );
};

export default Footer;
