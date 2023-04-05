import HeaderNavbar from "./navbar/Navbar";

const isAuth = true;

export default function Header () {
    return <>
        <HeaderNavbar isAuth={isAuth}/>
    </>
}