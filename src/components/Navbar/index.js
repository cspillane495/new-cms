import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../Button';
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
               <li className="nav-item" onClick={props.onClick}>
                   <Link to="/dashboard" className="nav-link">Dashboard</Link>
               </li>
               <li className="nav-item" onClick={props.onClick}>
                   <Link to="/episodes" className="nav-link">Episodes</Link>
               </li>
               <li className="nav-item" onClick={props.onClick}>
                   <Link to="/media" className="nav-link">Media</Link>
               </li>
           </ul>
           <ul style={{listStyle: "none", float: 'right'}}>
                <li><Button title="Logout" onClick={() => props.logout(props.history)}/></li>
           </ul>
           </div>
       </div>
    </nav>
    )
}


export default Navbar;