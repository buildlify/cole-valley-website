import Footer from '../components/footer/Footer';
import Nav from '../components/nav/Nav';
import Meta from './Meta';

type Props = {
  children: JSX.Element;
};

// Wraps _app.tsx file to include meta, nav, and footer components
const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
