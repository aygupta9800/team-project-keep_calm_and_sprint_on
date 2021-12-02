import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ApplicationCustomerNavbar from '../ApplicationCustomerNavbar/ApplicationCustomerNavbar.js';
import StickyHeadTable from '../../constants/Table';
import '../styles.css';

const ViewBookings = () => {
    const [bookings, setBookings] = useState([]);
    let bookingsState = useSelector((state) => state.bookings.bookings);
    const userDetails = useSelector((state) => state.login.userDetails.data);
    const columns = [
      { id: 'bookingDateTime', label: 'Date', minWidth: 170,
        format: (value) => value.toLocaleDateString(),
      },
      { id: 'flightClass', label: 'Flight Class', minWidth: 100 },
      {
        id: 'seatNumbers',label: 'Seats', minWidth: 100,
      },
      {
        id: 'identityNumber',label: 'Identity Number', minWidth: 170,
      },
      {
        id: 'totalPricePaid',label: 'Total Price Paid',minWidth: 170,
        format: (value) => value.toFixed(2),
      },
    ];

    useEffect(() => {
      let rows = [];
      for (let item of bookingsState) {
        rows.push({id: item._id,
          bookingDateTime: item.bookingDateTime.slice(0, 15),
          flightClass: item.flightClass,
          identityNumber: item.identityNumber,
          seatNumbers: item.seatNumbers.length,
          totalPricePaid: item.totalPricePaid,
          userId: item.userId,
          bookingId: item._id
        });
      }
      setBookings(rows);
    }, [bookingsState, userDetails]);

    return (
      <div>
          <ApplicationCustomerNavbar  />
          <div className='customLandingPage'>
              <div style={{width: '90%', display: 'flex', marginBottom: '10px'}}>
                  <h1 style={{fontWeight: 'bold', cursor: 'pointer'}} >View Flights</h1>
              </div>
              <hr />
              <StickyHeadTable columns={columns} rows={bookings} width='92.5%' isCancel />
          </div>
      </div>
    );
}

export default ViewBookings;