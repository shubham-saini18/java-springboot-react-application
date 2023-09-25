import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <dav className="container-fluid">
            <a className="navbar-brand" href="#">
                Hospital Management System
            </a>
            <button
             className="navbar-toggle"
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#navbarsupportedContent"
             aria-controls="navbarsupportedContent"
             aria-expanded="false"
             aria-label="Toggle navigation"
             > 
             <span className="navbar-toggle-icon"></span>
              </button> 
              <Link className="btn btn-outline-light" to="/adduser"> Add Doctor</Link>       
            </dav>
          </nav>

    </div>
  );
}
