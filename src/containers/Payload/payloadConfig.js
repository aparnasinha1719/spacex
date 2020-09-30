export const columns = [
	{
		id: 'payload_id',
		label: 'Payload ID',
		align: 'center'
	},
	{
		id: 'norad_id',
		label: 'Norad ID',
        align: 'center',
        format:(value)=>{
            return value.length===0?'N/A':value.length===1?value[0]:value.join(', ');
        }
    },
    {
		id: 'reused',
		label: 'Reused',
		align: 'center'
    },
    {
		id: 'customers',
		label: 'Customers',
        align: 'center',
        format:(value)=>{
            return value.length===0?'N/A':value.length===1?value[0]:value.join(', ');
        }
    },
    {
		id: 'nationality',
		label: 'Nationality',
		align: 'center'
    },
    {
		id: 'manufacturer',
		label: 'Manufacturer',
		align: 'center'
    },
    {
		id: 'payload_type',
		label: 'Payload Type',
		align: 'center'
    },
    {
		id: 'payload_mass_kg',
		label: 'Payload Mass(kg)',
		align: 'center'
    },
    {
		id: 'payload_mass_lbs',
		label: 'Payload Mass(lbs)',
		align: 'center'
    },
	{
		id: 'orbit',
		label: 'Orbit',
		align: 'center',
	}
];
