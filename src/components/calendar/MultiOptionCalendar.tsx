import type { CalendarOption } from "~/config/calendars";

interface MultiOptionCalendarProps {
	year: number;
	month: number;
	title: string;
	options: CalendarOption[];
	activityData: Record<string, Record<string, boolean>>;
	onToggle: (date: string, currentState: string | null) => void;
}

function getCalendarDays(year: number, month: number) {
	const firstDay = new Date(year, month, 1);
	const startDay = firstDay.getDay();
	const daysInMonth = new Date(year, month + 1, 0).getDate();

	const days: Date[] = [];

	const daysToAdd = startDay === 0 ? 7 : startDay;
	for (let i = daysToAdd - 1; i >= 0; i--) {
		days.push(new Date(year, month, -i));
	}

	for (let i = 1; i <= daysInMonth; i++) {
		days.push(new Date(year, month, i));
	}

	while (days.length < 42) {
		const lastDate = days[days.length - 1];
		if (lastDate) {
			days.push(
				new Date(
					lastDate.getFullYear(),
					lastDate.getMonth(),
					lastDate.getDate() + 1,
				),
			);
		}
	}

	return days;
}

function formatDate(date: Date): string {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	return `${year}-${month}-${day}`;
}

export function MultiOptionCalendar({
	year,
	month,
	title,
	options,
	activityData,
	onToggle,
}: MultiOptionCalendarProps) {
	const days = getCalendarDays(year, month);
	const dayHeaders = ["S", "M", "T", "W", "T", "F", "S"];

	const getCurrentState = (dateStr: string): string | null => {
		for (const option of options) {
			if (activityData[option.key]?.[dateStr]) {
				return option.key;
			}
		}
		return null;
	};

	const getColorForState = (state: string | null): string => {
		if (!state) return "";
		const option = options.find((opt) => opt.key === state);
		return option?.color || "";
	};

	const getLabelForState = (state: string | null): string => {
		if (!state) return "";
		const option = options.find((opt) => opt.key === state);
		return option?.label || "";
	};

	return (
		<div className="grid gap-1">
			<div className="flex items-center gap-2">
				<div className="text-xs font-semibold text-gray-300">{title}</div>
				<div className="flex items-center gap-2">
					{options.map((option) => (
						<div key={option.key} className="flex items-center gap-1">
							<div
								className="w-2 h-2 rounded-full"
								style={{ backgroundColor: option.color }}
							></div>
							{options.length > 1 && (
								<span className="text-[8px] text-gray-500">{option.label}</span>
							)}
						</div>
					))}
				</div>
			</div>
			<div className="grid grid-cols-7 gap-[3px]">
				{dayHeaders.map((day) => (
					<div
						key={day}
						className="w-6 h-4 text-[9px] text-gray-500 flex items-center justify-center"
					>
						{day}
					</div>
				))}
			</div>
			<div className="grid grid-cols-7 gap-[3px]">
				{days.map((date) => {
					const dateStr = formatDate(date);
					const currentState = getCurrentState(dateStr);
					const isActive = currentState !== null;
					const color = getColorForState(currentState);
					const isCurrentMonth = date.getMonth() === month;
					const today = new Date();
					today.setHours(0, 0, 0, 0);
					const isFuture = date > today;
					const isToday = date.getTime() === today.getTime();

					if (!isCurrentMonth) {
						return (
							<div
								key={`${dateStr}-other`}
								className="w-6 h-6 text-[10px] flex items-center justify-center text-zinc-700"
							>
								{date.getDate()}
							</div>
						);
					}

					return (
						<button
							key={dateStr}
							type="button"
							onClick={() => onToggle(dateStr, currentState)}
							className={`w-6 h-6 text-[10px] rounded-sm transition-colors ${
								isActive
									? "text-white font-semibold"
									: isFuture
										? "border border-dashed border-zinc-600 text-zinc-600 bg-transparent"
										: isToday
											? "text-zinc-300"
											: "text-zinc-500"
							}`}
							style={
								isActive
									? { backgroundColor: color }
									: !isFuture
										? { backgroundColor: isToday ? "#5a5a5a" : "#373737" }
										: undefined
							}
							title={`${title} - ${date.getDate()}${currentState ? ` (${getLabelForState(currentState)})` : ""}`}
						>
							{date.getDate()}
						</button>
					);
				})}
			</div>
		</div>
	);
}
