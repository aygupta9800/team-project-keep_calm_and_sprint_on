import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PopUp(props) {
  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent style={{padding: '30px'}}>
                <center><h4>Success!</h4></center>
          <DialogContentText id="alert-dialog-slide-description" style={{borderTop: '2px solid #DCDCDC', borderBottom: '2px solid #DCDCDC'}}>
            <center><CheckCircleIcon style={{height: '70px', width: '70px', color:'#FFA500'}}/>
            <p>{props.message}</p></center>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}