import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SearchFlights from '../SearchFlights.js';
import ApplicationCustomerNavbar from '../ApplicationCustomerNavbar/ApplicationCustomerNavbar.js';
import StickyHeadTable from '../../constants/Table';
import '../styles.css';

const ViewBookings = () => {
    const [bookings, setBookings] = useState([]);
    let bookingsState = useSelector((state) => state.bookings.bookings);
    const columns = [
        { id: 'bookingDateTime', label: 'Date', minWidth: 170 },
        { id: 'flightId', label: 'Flight ID', minWidth: 100 },
        {
          id: 'seatNumbers',label: 'Seats',minWidth: 170,
          format: (value) => value.toLocaleString('en-US'),
        },
        {
          id: 'totalPassengers',label: 'Total Passengers',minWidth: 170,
          format: (value) => value.toLocaleString('en-US'),
        },
        {
          id: 'totalPricePaid',label: 'Total Price Paid',minWidth: 170,
          format: (value) => value.toFixed(2),
        },
      ];

    useEffect(() => {
        bookingsState = bookingsState.map((booking) => formateDate(booking));
        setBookings(bookingsState);
    }, []);

    function formateDate(data){
        const formattedDate = new Date(data.bookingDateTime); 
        return {...data, bookingDateTime: formattedDate.getDate()+"-"+ formattedDate.getMonth()+"-"+ formattedDate.getFullYear()}
    }

    return (
        <div>
            <ApplicationCustomerNavbar  />
            <div className='customLandingPage'>
                <div style={{width: '90%', display: 'flex', marginBottom: '10px'}}>
                    <h1 style={{fontWeight: 'bold', cursor: 'pointer'}} >View Flights</h1>
                </div>
                <hr />
                <StickyHeadTable columns={columns} rows={bookings} width='92.5%' />
            </div>
        </div>
    );
}

export default ViewBookings;