import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setUserAction } from "../../redux/actions/actionsCreators";
import Links from "../Links/Links";

const HeaderContainer = styled.header`
  display: flex;
  padding: 10px;
  align-items: center;
  background-color: #ccc;
  justify-content: center;
  gap: 12px;

  & p {
    margin: 0;
  }

  & ul {
    display: flex;
    width: 60%;
    margin: 100px 0 10px 0;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    list-style: none;
    margin: 0 10px;

    & li a {
      text-decoration: none;
      color: #000;
      margin: 0 8px;
    }
    @media (max-width: 530px) {
      display: none;
    }
  }

  @media (max-width: 650px) {
    font-size: 14px;
  }
  @media (max-width: 590px) {
    font-size: 13px;
  }

  @media (max-width: 560px) {
    font-size: 12px;
  }
  @media (max-width: 530px) {
    justify-content: center;
  }
`;

const Header = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("userToken");
    dispatch(setUserAction({}));
    navigate("/");
  };
  return (
    <>
      {user.username && (
        <HeaderContainer>
          <Links />
          <img
            className="image-avatar"
            src={user.image}
            height="50"
            width="50"
            alt={user.username}
          />
          <p>
            Logged in as{" "}
            <span className="login-name">{`${user.username}`}</span>
          </p>
          <button onClick={logout}>Logout</button>
        </HeaderContainer>
      )}
    </>
  );
};
export default Header;
