import React from 'react';
import ApplicationCustomerNavbar from '../ApplicationCustomerNavbar/ApplicationCustomerNavbar.js';
import '../styles.css';

const CustomerProfile = () => {
    return (
        <div>
            <ApplicationCustomerNavbar  />
            <div className='landingpage'>
                <h1>Customer Profile</h1>
            </div>
        </div>
    );
}

export default CustomerProfile;