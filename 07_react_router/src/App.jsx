import "./App.css";
import { Routes, Route } from "react-router-dom"; // <-- import Routes and Route
import {
  Layout,
  Home,
  About,
  Contact,
  User,
  GitHub,
  Profile,
  githubInfoLoader,
} from "./components/index.js";
// import { githubInfoLoader } from "./components/GitHub/GitHub.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<div>Settings Section</div>} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="user/:userId" element={<User />} />
          <Route path="github" element={<GitHub />} loader={githubInfoLoader} />
          {/* loader is not supported here */}
          {/* The useLoaderData() hook requires being used inside a data-aware router context like createBrowserRouter or a <Router> that supports loaders. */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
