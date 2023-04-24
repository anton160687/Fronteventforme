import HeaderNavbar from './navbar/Navbar';

const isAuth = false;

export default function Header() {
  return (
    <>
      <HeaderNavbar isAuth={isAuth} />
    </>
  );
}
