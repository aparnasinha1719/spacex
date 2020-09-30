import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    link: {
      color:'white',
      textDecoration:'none',
      textTransform:'uppercase',
      padding:'8px 16px',
      '&.active':{
          borderBottom:'2px solid',
          transition:'borderBottom ease-out 5s'
      }
    },
    active:{

    }
  }));

function NavigationLink(props) {
  const classes = useStyles();

    return (
        <NavLink to={props.link} exact={props.exact} className={classes.link}>{props.children}</NavLink>
    )
}

export default NavigationLink;
