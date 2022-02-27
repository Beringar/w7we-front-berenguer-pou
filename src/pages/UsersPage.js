import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UsersList from "../components/UsersList/UsersList";
import { loadUsersThunk } from "../redux/thunks/usersThunks";

const UsersPage = ({ myNetwork = false }) => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!myNetwork) {
      dispatch(loadUsersThunk);
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
