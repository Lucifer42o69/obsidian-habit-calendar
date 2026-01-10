export interface CalendarOption {
	key: string;
	label: string;
	color: string;
}

export interface CalendarConfig {
	title: string;
	options: CalendarOption[];
}

export const calendarsConfig: CalendarConfig[] = [
	{
		title: 'Run or Ski',
		options: [
			{ key: 'run', label: 'Run', color: '#3b82f6' },
			{ key: 'ski', label: 'Ski', color: '#06b6d4' },
		],
	},
	{
		title: 'Lifting',
		options: [
			{ key: 'lifting', label: 'Lifting', color: '#ef4444' },
		],
	},
	{
		title: 'Studying',
		options: [
			{ key: 'study1h', label: '1h', color: '#196c2e' },
			{ key: 'study3h', label: '2h', color: '#2ea043' },
			{ key: 'study4h', label: '3h+', color: '#56d364' },
		],
	},
];

export const allActivityKeys = calendarsConfig.flatMap((config) =>
	config.options.map((opt) => opt.key)
);

