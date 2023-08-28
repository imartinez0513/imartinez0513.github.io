// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Ian',
	imageBackground: false,
	openInNewTab: false,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Whats the story, Morning Glory?',
	greetingAfternoon: 'ATONAL SCREAMING,',
	greetingEvening: 'Whats the tale, Nightinggale?,',
	greetingNight: 'Sleep?',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'fecdddc5ff5a7ba7d74f4d91a18e5bde', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'F', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '3',
			name: 'Pocketcasts',
			icon: 'podcast',
			link: 'https://play.pocketcasts.com/podcasts',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.proton.me/',
		},
		{
			id: '1',
			name: 'any.do',
			icon: 'clipboard-list',
			link: 'https://app.any.do/myday',
		},
		{
			id: '4',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'infinity',
			id: '1',
			links: [
				{
					name: 'Discord',
					link: 'https://discord.com/app',
				},
				{
					name: 'OpenAI Playground',
					link: 'https://platform.openai.com/playground',
				},
				{
					name: 'Wikipedia',
					link: 'https://www.wikipedia.org/',
				},
				{
					name: 'Amazon',
					link: 'https://www.amazon.com',
				},
			],
		},
		{
			icon: 'cog',
			id: '2',
			links: [
				{
					name: 'Dar-es-Balat',
					link: 'https://wfremen.quickconnect.to/',
				},
				{
					name: 'Heighliner',
					link: 'https://heighliner.judgementative.com/',
				},
				{
					name: 'Link List',
					link: 'https://links.judgementative.com/bookmarks',
				},
				{
					name: 'Must Consume Information',
					link: 'https://imartinez0513.github.io/',
				},
				{
					name: 'TBD',
					link: 'https://imartinez0513.github.io/',
				},
			],
		},
		{
			icon: 'briefcase',
			id: '3',
			links: [
				{
					name: 'Jira',
					link: 'https://steelcloud.atlassian.net/',
				},
				{
					name: 'SteelCloud Portal',
					link: 'https://www.steelcloud-access.com',
				},
				{
					name: 'Salesforce',
					link: 'https://steelcloud123456.my.salesforce.com/',
				},
				{
					name: 'Microsoft 365 Admin Center',
					link: 'https://admin.microsoft.com/#/homepage',
				},
				{
					name: 'AWS',
					link: 'https://aws.amazon.com/',
				},
			],
		},
	],

	/* Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	
	],
	*/
};
