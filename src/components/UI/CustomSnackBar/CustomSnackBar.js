import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
function CustomSnackBar(props) {
	return (
		<Snackbar open={props.open} autoHideDuration={props.timer} >
			<Alert  severity={props.snackType}>
				{props.children}
			</Alert>
		</Snackbar>
	);
}

export default CustomSnackBar;
