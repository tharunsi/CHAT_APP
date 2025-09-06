import { BiLogOut } from "react-icons/bi";
import "./LogoutButton.css";

const LogoutButton = () => {
  return (
    <div className="logout-container">
      <BiLogOut className="logout-icon" />
    </div>
  );
};

export default LogoutButton;
