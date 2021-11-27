import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ApplicationEmployeeNavbar from './ApplicationEmployeeNavbar/ApplicationEmployeeNavbar.js';
import ApplicationCustomerNavbar from './ApplicationCustomerNavbar/ApplicationCustomerNavbar.js';
import './styles.css';

const Airline = (props) => {
    const mileageNumber = useSelector((state) => state.login.userDetails.data.mileageNumber);
    const empId = useSelector((state) => state.login.userDetails.data.empId);
    const userType = props.location.state.userType;
    return (
        <div>
            {(userType === 'employee')
            ? <ApplicationEmployeeNavbar  />
            : <ApplicationCustomerNavbar />}
            <div className='landingpage'>
                <table style={{width: '90%', height:'50px', border: '1px solid black', background: '#fff'}}>
                    <tbody>
                        <tr>
                            <td>{userType === 'employee' ?
                                <span> Unique Employee Identification Number: <span style={{fontWeight: 'bold', background: 'yellow'}}> {empId} </span></span> :
                                <span> Unique Customer Mileage Number: <span style={{fontWeight: 'bold', background: 'yellow'}}> {mileageNumber} </span></span>
                                }</td>
                        </tr>
                    </tbody>
                </table>
                <h1>Airline</h1>
            </div>
        </div>
    );
}
Airline.propTypes = {
    userType: PropTypes.string,
};

export default Airline;