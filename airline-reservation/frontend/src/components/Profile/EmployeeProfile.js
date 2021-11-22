import React from 'react';
import ApplicationEmployeeNavbar from '../ApplicationEmployeeNavbar/ApplicationEmployeeNavbar.js';
import '../styles.css';

const EmployeeProfile = () => {
    return (
        <div>
            <ApplicationEmployeeNavbar  />
            <div className='landingpage'>
                <h1>Employee Profile</h1>
            </div>
        </div>
    );
}

export default EmployeeProfile;