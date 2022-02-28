import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UsersList from "../components/UsersList/UsersList";
import { loadUsersThunk } from "../redux/thunks/usersThunks";

const UsersPage = ({ myNetwork = false }) => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!myNetwork) {
      const token = localStorage.getItem("userToken");
      if (token) {
        dispatch(loadUsersThunk(token));
      }
    }
  }, [dispatch, myNetwork]);
  return (
    <>
      <main className="main">
        <UsersList users={users} />
      </main>
    </>
  );
};
export default UsersPage;
