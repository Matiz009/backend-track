import React, { useContext } from "react";
import { Context } from "../index";
import Loader from "../components/Loader";

const Profile = () => {
  const { isAuthenticated, user } = useContext(Context);

  return isAuthenticated ? (
    <div>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
    </div>
  ) : (
    <Loader />
  );
};

export default Profile;
