import * as React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';

export default function BasicDateRangePicker(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText="Check-in"
        endText="Check-out"
        style={{width: '77%'}}
        value={props.value}
        onChange={(newValue) => {
          props.setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <div style={{margin: '8px', height: '56px', display: 'flex'}}>
            <TextField {...startProps} style={{background: 'white'}} />
            <Box sx={{ mx: 2 }} style={{alignSelf: 'center'}}> to </Box>
            <TextField {...endProps} style={{background: 'white'}} />
          </div>
        )}
      />
    </LocalizationProvider>
  );
}
BasicDateRangePicker.propTypes = {
    // ...prop type definitions here
    value: PropTypes.string,
    setValue: PropTypes.func,
};