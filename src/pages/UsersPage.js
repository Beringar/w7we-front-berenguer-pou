const UsersPage = ({ myNetwork = false }) => {
  return (
    <>
      <main className="main">
        <h1>
          {`USERS PAGE with a grid with: a) all users, b) all friends of logged in
          user c) all enemmies of logged in user (depending of props passed to
          UsersList component myNetwork=true/false, if myNetwork===false -> all
          Users, else --> only users in user's network)`}
        </h1>
      </main>
    </>
  );
};
export default UsersPage;
