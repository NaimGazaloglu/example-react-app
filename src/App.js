import { Routes, Route, Link, BrowserRouter, NavLink } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Users from "./components/Users";
import About from "./components/About";
import User from "./components/User";

function App() {


  const style = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "black" : "",
      color: isActive ? "white" : "",
    };
  }


  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                style={style}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                style={style}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                style={style}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="users" element={<Users />}>
            <Route path=":id" element={<User />} />
          </Route>

          <Route path="about" element={<About />}></Route>
          <Route path="*" element={<h4>This page was not found!!!</h4>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
