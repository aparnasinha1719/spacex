import React from 'react';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
export const columns = [
	{
		id: 'id',
		label: 'ID',
		align: 'center'
	},
	{
		id: 'title',
		label: 'Title',
		align: 'left'
	},
	{
		id: 'event_date_utc',
		label: 'Event Date',
		align: 'center',
		format: (value) => new Date(value).toLocaleString(),
	},
	{
		id: 'flight_number',
		label: 'Flight Number',
		align: 'center'
    },
    {
		id: 'links',
		label: 'Links',
        align: 'center',
        format:(value)=>(<SocialLinks links={value}></SocialLinks> )
	}
];
