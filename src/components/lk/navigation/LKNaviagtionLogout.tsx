
import { MouseEvent } from 'react';
import { useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import Link from "next/link";
import { setAuth } from "@/store/user/userSlice";
import { clearAuthData } from "@/services/auth.service";
import { LKSectionsTitles, Paths } from "@/constant";


function LkNavigationLogout() {
  const router = useRouter();
  const dispatch = useDispatch();

  function handleLogout(e: MouseEvent<HTMLAnchorElement> ) {
    e.preventDefault();
    clearAuthData();
    dispatch(setAuth(false));
    router.push(Paths.Home);
  }

  return (
    <Link
      href='#'
      className="card-nav-link"
      onClick={handleLogout}
    >
      <i className='fi-logout me-2'></i>
      {LKSectionsTitles.Logout}
    </Link>
  )
}

export default LkNavigationLogout;