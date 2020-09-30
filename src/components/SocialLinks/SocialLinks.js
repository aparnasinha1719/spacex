import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RedditIcon from '@material-ui/icons/Reddit';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import LanguageIcon from '@material-ui/icons/Language';
import { makeStyles } from '@material-ui/core/styles';

// import PublicIcon from '@material-ui/icons/Public';
const useStyles = makeStyles({
icons:{
	fontSize:'1.3rem',
},
links:{
	fontSize:'0.75rem',
	color:'#222',
	'&:hover':{
		color:'#003a70'
	}
},
'iconRoot':{
	minWidth:'31px'
}
})

function SocialLinks(props) {
	const classes = useStyles();
	return (
		<List component="nav" aria-label="main mailbox folders">
			{Object.keys(props.links).map((key) =>
				props.links[key] ? (
					<ListItem key={key}>
						<ListItemIcon className={classes.iconRoot}>
                           {key==="reddit"?
						   <RedditIcon className={classes.icons}/>
						   :key==="article"?
						   <ArtTrackIcon className={classes.icons}/>
						   :<LanguageIcon className={classes.icons}/>} 
                        </ListItemIcon>
						<ListItemText >
						<a href={props.links[key]} className={classes.links} target="blank">
						{props.links[key]}</a>
						</ListItemText>
					</ListItem>
				) : null
			)}
		</List>
	);
}

export default SocialLinks;
