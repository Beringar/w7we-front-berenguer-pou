import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginRegisterForm from "../components/LoginRegisterForm/LoginRegisterForm";
import jwt_decode from "jwt-decode";
import { setUserAction } from "../redux/actions/actionsCreators";

const LoginPage = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (user.username) {
        navigate("/mynetwork");
      } else {
        const token = localStorage.getItem("userToken");
        if (token) {
          const { id, name, username } = await jwt_decode(token);
          dispatch(setUserAction({ id, name, username }));
        }
      }
    })();
  }, [dispatch, navigate, user]);

  useEffect(() => {}, [user, navigate]);

  return (
    <>
      <main className="main">
        <LoginRegisterForm />
      </main>
    </>
  );
};
export default LoginPage;
