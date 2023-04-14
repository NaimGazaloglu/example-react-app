import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Users from "./components/Users";
import About from "./components/About";
import User from "./components/User";



function App() {
  return (
      <div>
        <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="users" element={<Users />}>
              <Route path=":id" element={<User />}/>
            </Route>
            
            <Route path="about" element={<About />}></Route>
            <Route path="*" element={<h4>This page was not found!!!</h4>}></Route>
          </Routes>
        </BrowserRouter>
        
      </div>
  );
}

export default App;
