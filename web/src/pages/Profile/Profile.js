import { useAuth0 } from "@hammerframework/hammer-auth-auth0";

const Profile = () => {
  const { loading, user } = useAuth0();

  console.log(user);

  if (loading || !user) {
    return "Loading...";
  }

  return (
    <>
      <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
    </>
  );
};

export default Profile;
