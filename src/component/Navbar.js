import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className="container-fluid p-0">
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Home</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to='/login'>Login </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to='/employeedata'>EmployeeData</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
