import { Link } from "react-router-dom";

const Links = () => {
  return (
    <ul>
      <li>
        <Link to="/">My network</Link>
      </li>
      <li>
        <Link to="users">All Users</Link>
      </li>
      <li>
        <Link to="user">My profile</Link>
      </li>
      <li>
        <Link to="/">Login</Link>
      </li>
    </ul>
  );
};
export default Links;
