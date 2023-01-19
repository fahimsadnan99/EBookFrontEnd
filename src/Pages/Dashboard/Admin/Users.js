import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseUrl } from "../../../api/api";

const Users = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`${BaseUrl}/allUser`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err.response.data.message));
  }, []);

  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 offset-1">
            <table class="table table-dark">
              <thead>
                <tr>
                
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                </tr>
              </thead>
              <tbody>
                {user?.map((user) => {
                 return (<tr>
                   
                    <td>{user?.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                  </tr>)
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
