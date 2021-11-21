import React from 'react';
import { useHistory } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LandingNavbar from './LandingNavbar/LandingNavbar.js';
import StickyHeadTable from '../constants/Table';
import './styles.css';

function FlightDetails(props) {
    const history = useHistory();
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
    
    const rows = [
        {
            duration: '16h 45m',
            timings: '7:00AM - 4:15PM',
            origin: 'San Jose',
            destination: 'arizona',
            price: '650$'
        },
        {
            duration: '16h 45m',
            timings: '7:00AM - 4:15PM',
            origin: 'San Jose',
            destination: 'arizona',
            price: '650$'
        },
        {
            duration: '16h 45m',
            timings: '7:00AM - 4:15PM',
            origin: 'San Jose',
            destination: 'arizona',
            price: '650$'
        },
        {
            duration: '16h 45m',
            timings: '7:00AM - 4:15PM',
            origin: 'San Jose',
            destination: 'arizona',
            price: '650$'
        },
        {
            duration: '16h 45m',
            timings: '7:00AM - 4:15PM',
            origin: 'San Jose',
            destination: 'arizona',
            price: '650$'
        },
        {
            duration: '16h 45m',
            timings: '7:00AM - 4:15PM',
            origin: 'San Jose',
            destination: 'arizona',
            price: '650$'
        },
        {
            duration: '16h 45m',
            timings: '7:00AM - 4:15PM',
            origin: 'San Jose',
            destination: 'arizona',
            price: '650$'
        },
        {
            duration: '16h 45m',
            timings: '7:00AM - 4:15PM',
            origin: 'San Jose',
            destination: 'arizona',
            price: '650$'
        },
        {
            duration: '16h 45m',
            timings: '7:00AM - 4:15PM',
            origin: 'San Jose',
            destination: 'arizona',
            price: '650$'
        },
        {
            duration: '16h 45m',
            timings: '7:00AM - 4:15PM',
            origin: 'San Jose',
            destination: 'arizona',
            price: '650$'
        },
        {
            duration: '16h 45m',
            timings: '7:00AM - 4:15PM',
            origin: 'San Jose',
            destination: 'arizona',
            price: '650$'
        },
        {
            duration: '16h 45m',
            timings: '7:00AM - 4:15PM',
            origin: 'San Jose',
            destination: 'arizona',
            price: '650$'
        },
        {
            duration: '16h 45m',
            timings: '7:00AM - 4:15PM',
            origin: 'San Jose',
            destination: 'arizona',
            price: '650$'
        },
        {
            duration: '16h 45m',
            timings: '7:00AM - 4:15PM',
            origin: 'San Jose',
            destination: 'arizona',
            price: '650$'
        },
        {
            duration: '16h 45m',
            timings: '7:00AM - 4:15PM',
            origin: 'San Jose',
            destination: 'arizona',
            price: '650$'
        }
    ]
    return (
        <div>
            <LandingNavbar  />
            <div className='landingpage'>
                <div style={{width: '90%', display: 'flex', marginBottom: '10px'}}>
                    <ArrowBackIcon style={{cursor: 'pointer'}} onClick={() => {history.push('/SearchFlights')}} />
                    <span style={{fontWeight: 'bold', cursor: 'pointer'}} onClick={() => {history.push('/SearchFlights')}}>Back to Search</span>
                </div>
               <StickyHeadTable columns={columns} rows={rows} />
            </div>
        </div>
    );
}

export default FlightDetails;