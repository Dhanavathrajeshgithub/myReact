import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
const GitHub = () => {
  //   const [followers, setFollowers] = useState(null);
  //   useEffect(() => {
  //     fetch(`https://api.github.com/users/Dhanavathrajeshgithub`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setFollowers(data.followers);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, [followers]);
  const data = useLoaderData();
  return (
    <div className="text-center p-4 m-4 bg-gray-700 text-white">
      GitHub Followers: {data.followers} {/* followers */}
    </div>
  );
};

export default GitHub;

export const githubInfoLoader = async () => {
  const response = await fetch(
    `https://api.github.com/users/Dhanavathrajeshgithub`
  );
  return response.json();
};
