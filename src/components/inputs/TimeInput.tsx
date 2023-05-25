import React, { useCallback, useEffect, useState } from "react";

const hourOptions = [
	"01",
	"02",
	"03",
	"04",
	"05",
	"06",
	"07",
	"08",
	"09",
	"10",
	"11",
	"12",
	"13",
	"14",
	"15",
	"16",
	"17",
	"18",
	"19",
	"20",
	"21",
	"22",
	"23",
];

const minutesOptions = ["05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];

interface TimeInputProps {
	disabled: boolean;
	onChange: (value: string) => void;
}

const TimeInput = ({ disabled, onChange }: TimeInputProps) => {
	const [hours, setHours] = useState("00");
	const [minutes, setMinutes] = useState("00");

	useEffect(() => {
		let time = `${hours}:${minutes}`;
		onChange(time);
	}, [hours, minutes]);

	const handleChangeHours = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const hours: string = event.target.value;
		setHours(hours);
	};

	const handleChangeMinutes = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const minutes: string = event.target.value;
		setMinutes(minutes);
	};
	return (
		<div
			className={`
                    block
                    rounded-lg 
                    border-0 
                    py-3
                    mt-2
                    mb-1
                    text-gray-900 
                    shadow-sm 
                    ring-1 
                    ring-inset 
                    ring-gray-300 
                    placeholder:text-gray-400 
                    focus:ring-2 
                    focus:ring-inset 
                    focus:ring-indigo-600
                    outline-none
                    transition
                    ${disabled && "opacity-40"}
                    ${disabled && "cursor-not-allowed"}
                    px-4
            `}
		>
			<select
				disabled={disabled}
				onChange={handleChangeHours}
				defaultValue={"00"}
				className="
                    focus:ring-2 
                    focus:ring-inset 
                    focus:ring-indigo-600
                    outline-none
                    transition
                    disabled:opacity-30
                    disabled:cursor-not-allowed
                    appearance-none
                    bg-transparent
                    "
			>
				<option value="00">00</option>
				{hourOptions.map((h, index) => (
					<option key={index} value={h}>
						{h}
					</option>
				))}
			</select>
			{` : `}
			<select
				disabled={disabled}
				onChange={handleChangeMinutes}
				defaultValue={"00"}
				className="
                    focus:ring-2 
                    focus:ring-inset 
                    focus:ring-indigo-600
                    outline-none
                    transition
                    disabled:opacity-30
                    disabled:cursor-not-allowed
                    appearance-none
                    bg-transparent
            "
			>
				<option value="00">00</option>
				{minutesOptions.map((m, index) => (
					<option key={index} value={m}>
						{m}
					</option>
				))}
			</select>
		</div>
	);
};

export default TimeInput;
