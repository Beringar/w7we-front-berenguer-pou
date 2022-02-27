import RegisterForm from "../components/RegisterForm/RegisterForm";

const ProfilePage = () => {
  return (
    <>
      <main className="main">
        <h1>
          PROFILE PAGE with details of user (if is logged in user, add button to
          edit...)
        </h1>
        <RegisterForm />
      </main>
    </>
  );
};
export default ProfilePage;
