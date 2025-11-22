import { Outlet } from 'react-router';
import Header from '../components/layout/Header';

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
