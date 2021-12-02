import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { ColorButton3 } from '../constants/index';
import { cancelBooking } from '../state/action-creators/bookingAction';
import MakeBookingDialog from '../components/MakeBookingDialog';
import { getUserDetails } from '../state/action-creators/profileAction';

export default function StickyHeadTable(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(false);
  const [seats, setSeats] = useState([]);
  const flights = useSelector((state) => state.flight.flightDetails);
  const [allFlights, setAllFlights] = useState([]);
  const [flightDetails, setFlightDetails] = useState({});
  const userDetails = useSelector((state) => state.login.userDetails.data);
  const dispatch = useDispatch();

  useEffect(() => {
    setAllFlights(flights);
  }, [flights])

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (row) => {
    let selected;
    if (allFlights.data.length > 0) {
      selected = allFlights.data.filter((item) => {
        return item._id === row.flightId
      })
    }
    setSeats(selected[0].seats);
    setFlightDetails(row);
    setOpen(true);
  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: props.width || '90%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {props.columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {props.columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    {props.isEdit &&
                    <TableCell key={`edit-${row.id}`}>
                      <ColorButton3 onClick={() => {handleOpen(row, true)}}>Book</ColorButton3>
                    </TableCell>}
                    {props.isCancel && userDetails.userType === 'user' &&
                    <TableCell key={`edit-${row.id}`}>
                      <ColorButton3 onClick={() => { dispatch(cancelBooking(row.bookingId, row.userId))}}>Cancel Booking</ColorButton3>
                    </TableCell>}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {props.isEdit && <MakeBookingDialog
        open={open}
        seats={seats}
        flightDetails={flightDetails}
        handleClose={handleClose}
      />}
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={props.rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
StickyHeadTable.propTypes = {
    // ...prop type definitions here
    columns: PropTypes.array,
    rows: PropTypes.array,
    width: PropTypes.string,
    isEdit: PropTypes.bool,
    isCancel: PropTypes.bool
};