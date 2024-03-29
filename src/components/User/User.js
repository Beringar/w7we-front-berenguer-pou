import {
  faEye,
  faHeart,
  faSkullCrossbones,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 20px;
  background-color: #ffffff0a;
  border-radius: 4px;
`;

const User = ({ className, user }) => {
  const navigate = useNavigate();

  const setFriend = () => {};
  const setEnemy = () => {};

  const goToUserPage = (id) => {
    navigate(`/users/${id}`);
  };

  return (
    <UserWrapper>
      <h2>{user.username}</h2>
      <h3>{user.name}</h3>
      <img
        className={className}
        src={user.image}
        alt={user.username}
        width="300"
        height="300"
      />
      <div className="user-card__buttons-wrapper">
        <FontAwesomeIcon
          className="user-icons"
          icon={faEye}
          onClick={() => goToUserPage(user.id)}
          size="2x"
        />
        <FontAwesomeIcon
          className="user-icons"
          icon={faHeart}
          onClick={setFriend}
          size="2x"
        />
        <FontAwesomeIcon
          className="user-icons"
          icon={faSkullCrossbones}
          onClick={setEnemy}
          size="2x"
        />
      </div>
    </UserWrapper>
  );
};

export default User;
