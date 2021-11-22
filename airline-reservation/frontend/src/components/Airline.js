import React from 'react';
import PropTypes from 'prop-types';
import ApplicationEmployeeNavbar from './ApplicationEmployeeNavbar/ApplicationEmployeeNavbar.js';
import ApplicationCustomerNavbar from './ApplicationCustomerNavbar/ApplicationCustomerNavbar.js';
import './styles.css';

const Airline = (props) => {
    return (
        <div>
            {props.userType === '' ? <ApplicationEmployeeNavbar  /> : <ApplicationCustomerNavbar />}
            <div className='landingpage'>
                <h1>Airline</h1>
            </div>
        </div>
    );
}
Airline.propTypes = {
    userType: PropTypes.string,
};

export default Airline;