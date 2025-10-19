import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  Layout,
  Home,
  About,
  Contact,
  User,
  GitHub,
  githubInfoLoader,
  Profile,
} from "./components/index.js";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home />} />
//       <Route path="about" element={<About />}>
//         <Route path="profile" element={<Profile />} />
//         <Route path="settings" element={<div>Settings Section</div>} />
//       </Route>
//       <Route path="contact" element={<Contact />} />
//       <Route path="user/:userId" element={<User />} />
//       <Route loader={githubInfoLoader} path="/github" element={<GitHub />} />
//     </Route>
//   )
// );
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
