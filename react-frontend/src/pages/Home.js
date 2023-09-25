import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';

export default function Home() {
    const [users, setUsers]= useState([]);
    const {id}=useParams()

    useEffect(() => {
     loadUsers();
    }, []);

    const loadUsers = async () => {
         const result= await axios.get("http://54.166.226.23:8092/api/doctor/all");
         setUsers(result.data);
    };

    const deleteUser = async (id)=>{
        await axios.delete(`http://54.166.226.23:8092/api/doctor/delete/${id}`)
        loadUsers()
    }

  return (
    <div className="container">
        <div className="py-4">
            <table className="table border shadow">
             <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Doctor Name</th>
                    <th scope="col">Specialist</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Action</th>
                </tr>
             </thead>
             <tbody>
                {users.map((user, index) => (
                    <tr>
                        <th scope="row" key={index}>
                            {index + 1}
                        </th>
                        <td>{user.name}</td>
                        <td>{user.specialist}</td>
                        <td>{user.salary}</td>
                        <td> 
                            <button className="btn btn-primary mx-2">View</button>
                            <Link className="btn btn-outline-primary mx-2"
                            
                            to={`/editdoctor/${user.id}`}
                            >Edit</Link>
                            <button className="btn btn-danger mx-2"
                            onClick={()=>deleteUser(user.id)}
                            >Delete</button>
                        </td>
                    </tr>
                ))}
             </tbody>

            </table>
        </div>

    </div>
  );
}
