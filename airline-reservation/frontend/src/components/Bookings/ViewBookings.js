import React from 'react';
import PropTypes from 'prop-types';
import ApplicationCustomerNavbar from '../ApplicationCustomerNavbar/ApplicationCustomerNavbar.js';
import ApplicationEmployeeNavbar from '../ApplicationEmployeeNavbar/ApplicationEmployeeNavbar.js';
import '../styles.css';

const ViewBookings = (props) => {
    return (
        <div>
            {(props.location.state.userType === 'employee')
            ? <ApplicationEmployeeNavbar  />
            : <ApplicationCustomerNavbar />}
            <div className='landingpage'>
                <h1>View Bookings</h1>
            </div>
        </div>
    );
}
ViewBookings.propTypes = {
    userType: PropTypes.string,
};
export default ViewBookings;