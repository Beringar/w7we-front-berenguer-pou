import "./App.css";
import { Route, Routes } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import ProfilePage from "./pages/ProfilePage";
import EditUserPage from "./pages/EditUserPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { setUserAction } from "./redux/actions/actionsCreators";
import { useEffect } from "react";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("userToken");
      if (token) {
        const { id, name, username } = await jwt_decode(token);
        dispatch(setUserAction({ id, name, username }));
      }
    })();
  }, [dispatch, user]);

  return (
    <>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/mynetwork" element={<UsersPage myNetwork={true} />} />
        <Route path="/users" element={<UsersPage myNetwork={false} />} />
        <Route path="/user" element={<ProfilePage />}>
          <Route path=":id" element={<ProfilePage />} />
          <Route path="edit" element={<EditUserPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
