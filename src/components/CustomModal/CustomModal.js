import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import DataList from '../UI/List/DataList';
import CloseIcon from '@material-ui/icons/Close';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top:0
    
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[3],
    padding: theme.spacing(0, 0, 3),
    width:'90%',
    maxWidth:'500px',
    maxHeight:'70%',
    overflow:'hidden',
    borderRadius:'5px'
    // overflowY:'scroll'
  },
  closeIcon:{
    cursor:'pointer',
    color: 'white',
    marginTop:'-8px',
    marginRight:'-15px',
    padding: '12px',
    float:'right',
    '&:hover':{
      opacity:'0.7',
      background: 'rgba(255,255,255,0.1)'
    }
}
  
}));

function CustomModal(props) {
  const classes = useStyles();
  // console.log(props.data);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
        
          <div className={classes.paper}>   
            <DataList data={props.data}>
          <CloseIcon className={classes.closeIcon} onClick={props.handleClose}/>

            </DataList>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
export default CustomModal;