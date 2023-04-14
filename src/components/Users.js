import { useState, useEffect } from "react";
import { Link, useLocation,Outlet, NavLink } from "react-router-dom";
import axios from "axios";


function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);


  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(() => setLoading(false));
  }, []);


  const style = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "black" : "",
      color: isActive ? "white" : "",
    };
  }


  
  return (
    <div>
      <h1>Users</h1>
      {loading && <div>Loading..</div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <NavLink style={style} to={`${user.id}`}>{user.name}</NavLink>
          </li>
        ))}
      </ul>
      <h3>Please select a user.</h3>

      <Outlet/>
        



    </div>
  );
}




export default Users;
