import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
	heading: {
        background: '#003a70',
        margin:'0',
        color:'#ffffff',
        fontWeight:'bold',
		textAlign: 'center',
		padding: theme.spacing(1, 2),
		boxShadow: '-3px -7px 28px 0px rgba(0,0,0,0.75)',
	},
	list: {
		overflowY: 'scroll',
		overflowX: 'hidden',
        height: 'calc(70vh - 42px)',
        fontSize: '0.8rem',
		padding: theme.spacing(2, 0, 0, 4),
    },
    info:{
        textTransform:'capitalize'
    }
}));
function DataList(props) {
	const classes = useStyles();
	console.log('object ',props.data);
	console.log("array created usign",Object.entries(props.data));
	return (
		<Fragment>
			<Typography variant="h6" className={classes.heading} gutterBottom>
				Details
			</Typography>
			<Box className={classes.list}>
				{Object.entries(props.data).filter(([_, v]) => v !== null).map(([key, value], index) =>(value && (value.length >= 0 || typeof value === 'boolean' || typeof value === 'number' ))? (
						<Grid container key={index} spacing={3}>
							<Grid item xs={5} className={classes.info}>
								{key}
							</Grid>
							<Grid item xs={7} >
								: {typeof value !== 'object'
									? value.toString()
									: !value.length
									? 'N/A'
									: value.join(', ')}
							</Grid>
						</Grid>
					) : (
						Object.entries(value).map(([key, value], index) => (
							<Grid container key={index} spacing={3}>
								<Grid item xs={5} className={classes.info}>
									{key}
								</Grid>
								<Grid item xs={7} >
									: {!value ? 'N/A' : value}
								</Grid>
							</Grid>
						))
					)
				)}
			</Box>
		</Fragment>
	);
}

export default DataList;
