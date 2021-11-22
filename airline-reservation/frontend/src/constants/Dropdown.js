import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(item, valueString, theme) {
  return {
    fontWeight:
    valueString.indexOf(item) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Dropdown = (props) => {
  const theme = useTheme();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    props.setValueString(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <FormControl sx={{ m: 1, width: 390 }} style={{background: 'white'}}>
        <InputLabel id='demo-multiple-name-label'>{props.label}</InputLabel>
        <Select
          labelId='demo-multiple-name-label'
          id='demo-multiple-name'
          value={props.valueString}
          onChange={handleChange}
          input={<OutlinedInput label={props.label} />}
          MenuProps={MenuProps}
        >
          {props.listItems.map((item) => (
            <MenuItem
              key={item}
              value={item}
              style={getStyles(item, props.valueString, theme)}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}
Dropdown.propTypes = {
    // ...prop type definitions here
    listItems: PropTypes.array,
    valueString: PropTypes.string,
    setValueString: PropTypes.func,
    label: PropTypes.string,
};
export default Dropdown;
