import {
    Grid,
    TextField
  } from '@material-ui/core';

export default function CustomTextField(props) {

    return (
      <div style={{margin: '10px 5px', background: "white", width: '100%'}}>
      <TextField
        variant="outlined"
        placeholder={props.placeholder}
        fullWidth
        required
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
      />
      </div>
    );
}