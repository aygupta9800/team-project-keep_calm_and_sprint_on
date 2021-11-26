import {
    Grid,
    TextField
  } from '@material-ui/core';

export default function CustomTextField(props) {

    return (
      <div style={{margin: '10px 5px', background: "white", width: '100%'}}>
      <TextField
       // label="First name"
        variant="outlined"
        placeholder={props.placeholder}
        fullWidth
        required
      />
      </div>
    );
}