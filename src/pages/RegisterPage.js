import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.username) {
      navigate("/users");
    }
  }, [navigate, user]);

  return (
    <>
      <main className="main">
        <h1 className="jumbo-text">Social Network</h1>
        <RegisterForm />
      </main>
    </>
  );
};
export default RegisterPage;
