import { useState, useEffect } from "react";
import { Link, useLocation,Outlet } from "react-router-dom";
import axios from "axios";
// function Topic() {
//   // The <Route> that rendered this component has a
//   // path of `/topics/:topicId`. The `:topicId` portion
//   // of the URL indicates a placeholder that we can
//   // get from `useParams()`.
//   let { topicId } = useParams();

//   return (
//     <div>
//       <h3>{topicId}</h3>
//     </div>
//   );
// }

function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  // console.log(pathname);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(() => setLoading(false));
  }, []);

  // const select_element = ;

  
  return (
    <div>
      <h1>Users</h1>
      {loading && <div>Loading..</div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <h3>Please select a user.</h3>

      <Outlet/>
        

        
    </div>
  );
}

export default Users;
