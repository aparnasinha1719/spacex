import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import CustomModal from '../CustomModal/CustomModal';
import PrimaryButton from '../UI/PrimaryButton/PrimaryButton';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  thead:{
    color: 'white',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    backgroundColor: '#003a70',
    padding:'6px 16px',
    
  },
  tableBodyRow:{
    '&:hover':{
      cursor:'pointer',
      backgroundColor:'rgba(224, 224, 224, 1)'
    },
    '&:nth-of-type(2n)':{
      backgroundColor:'rgba(224, 224, 224, 1)'
    }
  },
  tableBodyCell:{
    fontSize:'0.75rem',

  },
  container: {
    maxHeight: 'calc(100vh - 125px)',
  },
});

function BaseTable(props) {
  const classes = useStyles();
  const [modalData, setModalData] = React.useState({});
  const [page, setPage] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleOpen = (index) => {
    console.log('index',index);
    setModalData(props.rows[index])
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      {props.rows?(
        <Fragment>
        <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow >
              {props.columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className={classes.thead}
                >
                  {column.label}
                </TableCell>
              ))}
              {props.showDetailBtn?(<TableCell key={"details001"} align="center" className={classes.thead}>Go to</TableCell>):null}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index} className={classes.tableBodyRow}>
                  {props.columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} className={classes.tableBodyCell}>
                        {column.format ? column.format(value) : value?value:'N/A'}
                      </TableCell>
                    );
                  })}
                  {props.showDetailBtn?(
                    <TableCell align="center">
                    <PrimaryButton onClick={()=>handleOpen(page*rowsPerPage+index)}>Details</PrimaryButton>
                    </TableCell> )
                     :null}
                </TableRow>
                
              );
            })}

          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25,50, 100]}
        component="div"
        count={props.rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      </Fragment>)
      :null}
      <CustomModal open={open} handleClose={handleClose} data={modalData}></CustomModal>

    </Paper>
  );
}
export default BaseTable;