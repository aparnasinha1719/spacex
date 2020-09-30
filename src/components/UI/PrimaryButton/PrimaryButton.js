import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// import CustomModal from '../../CustomModal/CustomModal';

const useStyles = makeStyles((theme) => ({
	button: {
    height:27,
    background: '#799d4b',
    color: '#ffffff',
    fontSize: '0.75rem',
    textTransform:'capitalize',
		'&:hover': {
			background: '#6f8e48',
		},
	},
}));

function PrimaryButton(props) {
    const classes = useStyles();
	return (
        <div>
        <Button variant="contained" className={classes.button} disableElevation onClick={props.onClick}>
			{props.children}
		</Button>
        {/* <CustomModal open={open} handleClose={handleClose}></CustomModal> */}
        </div>
		
	);
}

export default PrimaryButton;
