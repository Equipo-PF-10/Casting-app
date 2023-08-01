import { useAuth0 } from "@auth0/auth0-react";
import Styles from "./LogOut.module.css"

const LogoutButton = () => {
  const { logout } = useAuth0();
  const handlerClick = ()=>{
    localStorage.clear();
    logout({ logoutParams: { returnTo: window.location.origin } })
  }

  return (
    <div className={Styles.btn}>
      <button onClick={handlerClick}>
        Log Out
      </button>
    </div>
  );
};

export default LogoutButton;