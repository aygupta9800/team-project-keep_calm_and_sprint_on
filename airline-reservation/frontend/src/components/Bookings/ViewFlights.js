import React from 'react';
import ApplicationCustomerNavbar from '../ApplicationCustomerNavbar/ApplicationCustomerNavbar.js';
import '../styles.css';

const ViewFlights = () => {
    return (
        <div>
            <ApplicationCustomerNavbar  />
            <div className='landingpage'>
                <h1>View Flights</h1>
            </div>
        </div>
    );
}

export default ViewFlights;