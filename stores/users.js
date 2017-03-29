


var users = [
	{
		key: 'jwaters@crimsonhexagon.com',
		password: 'Jamie@Crimson', 
		name: 'Jamie Waters', 
		initials: 'JW', 
		systemAdmin: true, 
		teamAdmin: true,  
		selected: true,
		teams: ['Team A', 'Team B', 'Team C', 'Team D'],
		helio: {
			savedSearches:[
				{
					name: 'FitFood',
					lastVolume: 4209129,
					currentVolume: 631282,
					lastOpened: ,
					createdBy: 'me',
					filters: {
						date: 'Jun 13-Jun 27',
						language: 'English',
						location: 'New York, NY',
						gender: false,
					}
				},
				{
					name: 'Another Search',
					lastVolume: 3209129,
					currentVolume: 631282,
					lastOpened: ,
					createdBy: 'me',
					filters: {
						date: 'Jan 13-Mar 27',
						language: 'English',
						location: 'United States',
						gender: false,
					}
				}
			]
		},
	},
	{key: 1, name: 'HelioSight', selected: false},
	{key: 2, name: 'Dashboards', selected: false},
	{key: 3, name: 'Reporting', selected: false},
]



export default users;
