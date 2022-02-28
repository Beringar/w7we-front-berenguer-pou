import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";

const LoginPage = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.username) {
      navigate("/users");
    }
  }, [navigate, user]);

  const goToRegisterPage = () => {
    navigate("/register");
  };

  return (
    <>
      <main className="main">
        {!user.username && (
          <>
            <h1 className="jumbo-text">Social Network</h1>
            <LoginForm />
            <div className="signup-cta">
              <h3>Dont't have an account?</h3>
              <button onClick={goToRegisterPage}>Signup Now</button>
            </div>
          </>
        )}
      </main>
    </>
  );
};
export default LoginPage;
