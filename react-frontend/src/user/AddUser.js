import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Adduser () {
    
   let navigate=useNavigate()

   const [user,setUsers]=useState({
     name:"",
     specialist:"",
     salary:""
   })
  
    const{name,specialist,salary}=user

    const onInputChange=(e)=>{
    setUsers({...user, [e.target.name]: e.target.value });
    };
    
    const onSubmit=async (e) => {
         e.preventDefault();
         await axios.post("http://localhost:8080/api/doctor/add",user)
         navigate("/")
    };


  return <div className="container"> 
             <div className="row">
              <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                 <h2 className="text-center m-4">Register New Doctor</h2>
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
