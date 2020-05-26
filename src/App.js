import React from 'react';

import Navbar from './component/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './component/Login';
import EmployeeData from './component/EmployeeData';

function App() {
  return (
    <Router>
        <>
        <div className="container app ">
            <div className="row">
                <Navbar />
            </div>
            <div className="row"> 
              
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/employeedata" component={EmployeeData} />
              </Switch>
            </div>
         
          </div>
         
        </>
    </Router>
    
  );
}

export default App;
