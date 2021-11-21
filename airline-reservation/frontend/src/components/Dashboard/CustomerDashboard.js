import React from 'react';
import ApplicationCustomerNavbar from '../ApplicationCustomerNavbar/ApplicationCustomerNavbar.js';
import '../styles.css';

const CustomerDashboard = () => {
    return (
        <div>
            <ApplicationCustomerNavbar  />
            <div className='landingpage'>
                <h1>Hello Customer</h1>
            </div>
        </div>
    );
}

export default CustomerDashboard;