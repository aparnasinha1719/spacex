/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NavigationLink from '../NavigationLink/NavigationLink';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '8px 10px',
    background: '#003a70',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

function NavigationBar() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <Typography className={classes.root}>
    {['history','payload'].map((value,index)=>(
      <NavigationLink link={'/'+value} key={index} exact={true} onClick={preventDefault}>{value}</NavigationLink>
    ))}
    </Typography>
  );
}

export default NavigationBar;