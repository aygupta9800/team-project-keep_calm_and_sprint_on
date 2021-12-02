import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SearchFlights from '../SearchFlights.js';
import ApplicationCustomerNavbar from '../ApplicationCustomerNavbar/ApplicationCustomerNavbar.js';
import StickyHeadTable from '../../constants/Table';
import '../styles.css';

const ViewFlights = () => {
    const history = useHistory();
    const searchDetails = useSelector((state) => state.flight.searchParams);
    const userDetails = useSelector((state) => state.login.userDetails.data);
    const flightDetails = useSelector((state) => state.flight.flightDetails);
    const [rows, setRows] = useState([]);

    const columns = [
        { id: 'duration', label: 'Duration', minWidth: 170 },
        { id: 'timings', label: 'Flight Timings', minWidth: 100 },
        {
          id: 'origin',label: 'Origin',minWidth: 170,
          format: (value) => value.toLocaleString('en-US'),
        },
        {
          id: 'destination',label: 'Destination',minWidth: 170,
          format: (value) => value.toLocaleString('en-US'),
        },
        {
          id: 'price',label: 'Price',minWidth: 170,
          format: (value) => value.toFixed(2),
        },
      ];

    useEffect(() => {
        const rows = [];
        if (flightDetails.data) {

            if (searchDetails.source[0] && searchDetails.destination[0]) {
                for (let item of flightDetails.data) {
                    if (searchDetails.source[0] === item.source && searchDetails.destination[0] === item.destination) {
                        rows.push({id: item._id,
                            duration: item.duration,
                            timings: `${item.startTime} - ${item.endTime}`,
                            origin: item.source,
                            destination: item.destination,
                            price: item.basePrice,
                            seats: item.seats,
                            userId: userDetails._id,
                            flightId: item._id
                        });
                    }
                }
                setRows(rows);
                return;
            }

            if (searchDetails.source[0]) {
                for (let item of flightDetails.data) {
                    if(searchDetails.source[0] === item.source) {
                        rows.push({id: item._id,
                            duration: item.duration,
                            timings: `${item.startTime} - ${item.endTime}`,
                            origin: item.source,
                            destination: item.destination,
                            price: item.basePrice,
                            seats: item.seats,
                            userId: userDetails._id,
                            flightId: item._id
                        });
                    }
                }
                setRows(rows);
                return;
            }

            if (searchDetails.destination[0]) {
                for (let item of flightDetails.data) {
                    if(searchDetails.destination[0] === item.destination) {
                        rows.push({id: item._id,
                            duration: item.duration,
                            timings: `${item.startTime} - ${item.endTime}`,
                            origin: item.source,
                            destination: item.destination,
                            price: item.basePrice,
                            seats: item.seats,
                            userId: userDetails._id,
                            flightId: item._id
                        });
                    }
                }
                setRows(rows);
                return;
            }
        }
    }, [flightDetails, searchDetails ]);

    return (
        <div>
            <ApplicationCustomerNavbar  />
            <div className='customLandingPage' style={{marginTop: '120px'}}>
                <div style={{width: '90%', display: 'flex', marginBottom: '10px'}}>
                    <h1 style={{fontWeight: 'bold', cursor: 'pointer'}} >View Flights</h1>
                </div>
                <SearchFlights />
                <hr />
                <StickyHeadTable columns={columns} rows={rows} width='92.5%' isEdit />
            </div>
        </div>
    );
}

export default ViewFlights;