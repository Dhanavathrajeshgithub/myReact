import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <h2>Please Login</h2>;
  else return <div>Welcome {user.username}</div>;
};

export default Profile;
