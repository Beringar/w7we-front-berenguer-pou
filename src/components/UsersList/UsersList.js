import User from "../User/User";
import styled from "styled-components";

const UsersListWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
`;

const UsersList = ({ users }) => (
  <UsersListWrapper>
    {users.map((user) => (
      <li key={user.id}>
        <User className="user-card-image" user={user} />
      </li>
    ))}
  </UsersListWrapper>
);

export default UsersList;
