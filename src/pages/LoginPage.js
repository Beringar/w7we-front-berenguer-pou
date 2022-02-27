import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";

const LoginPage = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.username) {
      navigate("/mynetwork");
    }
  }, [navigate, user]);

  return (
    <>
      <main className="main">{!user.username && <LoginForm />}</main>
    </>
  );
};
export default LoginPage;
