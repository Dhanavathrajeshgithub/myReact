import React from "react";
import { useParams } from "react-router-dom";
const User = () => {
  const { userId: id } = useParams();
  return (
    <div className="text-center bg-gray-600 text-white p-4 m-4 ">
      User: {id}{" "}
    </div>
  );
};

export default User;
