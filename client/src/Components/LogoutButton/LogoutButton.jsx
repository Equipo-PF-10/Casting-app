import { useAuth0 } from "@auth0/auth0-react";
import Styles from "./LogOut.module.css"
import style2 from "../Navbar/Navbar.module.css";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const handlerClick = ()=>{
    localStorage.clear();
    logout({ logoutParams: { returnTo: window.location.origin } })
  }

  return (
    <>
      <button onClick={handlerClick} className={style2.buttonNav}>
        Log Out
      </button>
    </>
  );
};

export default LogoutButton;