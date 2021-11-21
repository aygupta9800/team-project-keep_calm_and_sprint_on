import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LandingNavbar from './LandingNavbar/LandingNavbar.js';
import StickyHeadTable from '../constants/Table';
import './styles.css';

function FlightDetails(props) {
    const history = useHistory();
    const searchDetails = useSelector((state) => state.flight.searchParams);
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
        for (let item of flightDetails.data) {
            rows.push({id: item._id,
                duration: item.duration,
                timings: `${item.startTime} - ${item.endTime}`,
                origin: item.source,
                destination: item.destination,
                price: item.basePrice
            });
        }
        setRows(rows);
    }, []);

    return (
        <div>
            <LandingNavbar  />
            <div className='landingpage'>
                <div style={{width: '90%', display: 'flex', marginBottom: '10px'}}>
                    <ArrowBackIcon style={{cursor: 'pointer'}} onClick={() => {history.push('/')}} />
                    <span style={{fontWeight: 'bold', cursor: 'pointer'}} onClick={() => {history.push('/')}}>Back to Search</span>
                </div>
                <div style={{margin: '20px 0 20px 0', width: '90%'}}>
                <table style={{width: '100%', height:'50px', border: '1px solid black', background: '#fff'}}>
                    <tr>
                        <td>From: {searchDetails.source[0]}</td>
                        <td>To: {searchDetails.destination[0]}</td>
                        <td>Flight Date: {searchDetails.dateTime[0].toLocaleDateString()}</td>
                    </tr>
                    </table>
                </div>
               <StickyHeadTable columns={columns} rows={rows} />
            </div>
        </div>
    );
}

export default FlightDetails;