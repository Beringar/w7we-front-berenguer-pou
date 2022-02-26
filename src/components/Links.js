import { Link } from "react-router-dom";

const Links = ({ actionOnClick }) => {
  return (
    <ul>
      <li>
        <Link onClick={actionOnClick} to="/">
          My network
        </Link>
      </li>
      <li>
        <Link onClick={actionOnClick} to="users">
          All Users
        </Link>
      </li>
      <li>
        <Link onClick={actionOnClick} to="user">
          My profile
        </Link>
      </li>
      <li>
        <Link onClick={actionOnClick} to="login">
          Login
        </Link>
      </li>
    </ul>
  );
};
export default Links;
