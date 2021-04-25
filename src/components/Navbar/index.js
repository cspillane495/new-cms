import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = (props) => {
    const navCollapse = props.collapsed && 'collapse';
  return ( 
    <nav className="navbar navbar-light bg-light"
    >
       <div className="container-fluid">
           <Link to="/" className="navbar-brand mb-0 h1">{props.brand}</Link>
           <button className="navbar-toggler" onClick={props.onClick}>
               <span className="navbar-toggler-icon"></span>
           </button>
           <div className={`${navCollapse} navbar-collapse`}>
           <ul className="navbar-nav">
               <li className="nav-item">
                   <Link to="/dashboard" className="nav-link">Dashboard</Link>
               </li>
               <li className="nav-item">
                   <Link to="/form" className="nav-link">Form</Link>
               </li>
               <li className="nav-item">
                   <Link to="/articles" className="nav-link">Articles</Link>
               </li>
           </ul>
           </div>
       </div>
    </nav>
    )
}


export default Navbar;