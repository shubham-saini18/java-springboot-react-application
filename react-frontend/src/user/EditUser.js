import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser () {
    
   let navigate=useNavigate();

   const {id}=useParams()

   const [user,setUsers]=useState({
     name:"",
     specialist:"",
     salary:""
   })
  
    const{name,specialist,salary}=user

    const onInputChange=(e)=>{
    setUsers({...user, [e.target.name]: e.target.value });
    };

    useEffect(()=>{
        loadUsers();

    }, []);
    
    const onSubmit=async (e) => {
         e.preventDefault();
         await axios.put(`http://localhost:8080/api/doctor/updatedoctor/${id}`,user)
         navigate("/")
    };
   const loadUsers = async (id)=>{
      const result=await axios.get(`http://localhost:8080/api/doctor/${id}`)
      setUsers(result.data)
   }

  return <div className="container"> 
             <div className="row">
              <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                 <h2 className="text-center m-4">Edit Doctor Details</h2>
                 <form onSubmit={(e) => onSubmit(e)}>
                 <div className="mb-3">
                    <label htmlFor="Doctor Name" className="form-label">
                       Doctor Name
                    </label>
                    <input 
                     type={"text"}
                     className='form-control'
                     placeholder='Enter New Doctor Name'
                     name='name'
                     value={name}
                     onChange={(e)=>onInputChange(e)}/>
                 </div>
                 <div className="mb-3">
                    <label htmlFor="Specialist" className="form-label">
                    Specialist
                    </label>
                    <input 
                     type={"text"}
                     className='form-control'
                     placeholder="Enter Doctor's Specialization"
                     name='specialist'
                     value={specialist}
                     onChange={(e)=>onInputChange(e)}/>
                 </div>
                 <div className="mb-3">
                    <label htmlFor="Salary" className="form-label">
                        Doctor's Salary
                    </label>
                    <input 
                     type={"number"}
                     className='form-control'
                     placeholder="Enter Doctor's Salary"
                     name='salary'
                     value={salary}
                     onChange={(e)=>onInputChange(e)}/>
                 </div>
                 <button type='save' className='btn btn-outline-primary'>
                    Save
                 </button>
                 <Link type='save' className='btn btn-outline-danger mx-2' to="/"> 
                    Cancel
                 </Link>
                 </form>
              </div>
             </div>        
        
         </div>;
  
}
