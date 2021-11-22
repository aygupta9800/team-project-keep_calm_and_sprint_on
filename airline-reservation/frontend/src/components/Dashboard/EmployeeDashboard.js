import React from 'react';
import ApplicationEmployeeNavbar from '../ApplicationEmployeeNavbar/ApplicationEmployeeNavbar.js';
import '../styles.css';

const EmployeeDashboard = () => {
    return (
        <div>
            <ApplicationEmployeeNavbar  />
            <div className='landingpage'>
                <h1>Hello Employee</h1>
            </div>
        </div>
    );
}

export default EmployeeDashboard;