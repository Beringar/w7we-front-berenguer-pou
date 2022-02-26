const UsersPage = ({ myNetwork = false }) => {
  return (
    <>
      <main className="main">
        <h1>
          {`USERS PAGE with a grid with: a) all users, b) only those in logged in 
          user network (depending of props passed to
          UsersList component myNetwork=true/false)`}
        </h1>
      </main>
    </>
  );
};
export default UsersPage;
