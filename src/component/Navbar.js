import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'

function Navbar() {
    return (
        <div className="container-fluid p-0">
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <Link className="nav-link" to='/'><img src={logo} width="70rem" height="60rem" className="borderimg"/> </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    {/* <li className="nav-item active">
                        <Link className="nav-link" to='/login'>Login </Link>
                    </li> */}
                    {/* <li className="nav-item">
                        <Link className="nav-link" to='/employeedata'>EmployeeData</Link>
                    </li> */}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
