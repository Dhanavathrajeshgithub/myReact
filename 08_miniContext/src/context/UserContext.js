// This code defines a React Context named UserContext, which allows data (like the current logged-in user) to be shared across multiple components without passing props manually at every level.

//React.createContext()
//This function creates a Context object that helps you pass data deeply through the component tree without using props.
//createContext() can take an optional default value.
//The created context object comes with two components:
//UserContext.Provider — used to supply data.
//UserContext.Consumer — or, more commonly, the useContext(UserContext) hook — used to access that data.​

import React from "react";
const UserContext = React.createContext();
export default UserContext;

// Concept Summary
//Goal: Share global data (user, theme, settings, etc.) across multiple components.
//Eliminates: “Prop drilling” — passing props through many layers unnecessarily.
//Used with: Usually useContext() hook for reading and updating data.​
//This pattern is particularly helpful for managing things like authentication state or app-wide themes efficiently.
