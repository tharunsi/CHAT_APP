import { BiLogOut } from "react-icons/bi";
import "./LogoutButton.css";
import useLogout from "../hooks/useLogout";
import LoadingSpinner from "./LoadingSpinner";

const LogoutButton = () => {

    const {loading, logout} = useLogout();
  return (
    <div className="logout-container">
        {!loading ? (
      <BiLogOut className="logout-icon" onClick={logout}/>
        ) : (
            <LoadingSpinner />
        )}
    </div>
  );
};

export default LogoutButton;
