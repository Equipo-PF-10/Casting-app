import { useAuth0 } from "@auth0/auth0-react";
import Styles from "./LogOut.module.css"

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div className={Styles.btn}>
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
      </button>
    </div>
  );
};

export default LogoutButton;