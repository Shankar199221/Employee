import React from 'react';

import Navbar from './component/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './component/Login';
import EmployeeData from './component/EmployeeData';


function App() {
  return (
    <Router>
        <>
        <div className="container ">
            <div className="row">
                <Navbar />
               
            </div>
            <div className="row"> 
              <div className="col-2"></div>
              <div className="col-8">
                    <Switch>
                      <Route path="/" exact component={Login} />
                      <Route path="/employeedata" component={EmployeeData} />
                    </Switch>
              </div>
              <div className="col-2"></div>
              
              
            </div>
         
          </div>
         
        </>
    </Router>
    
  );
}

export default App;
