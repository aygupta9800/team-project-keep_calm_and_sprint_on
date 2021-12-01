import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (

    //sx={{ m: 0, p: 2 }} {...other}
    <DialogTitle >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {
  const handleClose = () => {
    props.closeCart();
  }; 

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.title}
        </BootstrapDialogTitle>
            <div style={{height: '80%', overflowY: 'scroll', boxShadow: '4px 0px 4px 0 rgb(0 0 0 / 20%)'}}>{props.children}</div>
            <div className="d-flex justify-content-around m-3">
              
            {props.actionLabel ? <button className="btn btn-success" onClick={props.action}>{props.actionLabel}</button> :''}
              {props.secondaryActionLabel ? <button className="btn btn-danger" onClick={props.secondaryAction}>{props.secondaryActionLabel}</button> :''}
            </div>
      </BootstrapDialog>
    </div>
  );
}
