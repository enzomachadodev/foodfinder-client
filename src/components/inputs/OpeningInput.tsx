"use client";

import { useEffect, useState } from "react";
import TimeInput from "./TimeInput";

interface OpeningInputProps {
	id: string;
	day: string;
	setValue: any;
	register: any;
	error: boolean;
	defaultValue?: string;
}

const OpeningInput = ({ id, day, register, error, setValue, defaultValue }: OpeningInputProps) => {
	const [openTime, setOpenTime] = useState("");
	const [closeTime, setCloseTime] = useState("");
	const [closed, setClosed] = useState(false);
	const [fulltime, setFulltime] = useState(false);

	useEffect(() => {
		if (defaultValue) {
			if (defaultValue === "Fechado") {
				return setClosed(true);
			}
			if (defaultValue === "24 Horas") {
				return setFulltime(true);
			}

			let [o, c] = defaultValue.split(" - ");
			setOpenTime(c);
			setCloseTime(c);
		}
	}, [defaultValue]);

	useEffect(() => {
		if (closed) {
			return setValue(id, "Fechado");
		}

		if (fulltime) {
			return setValue(id, "24 Horas");
		}

		let times = `${openTime} - ${closeTime}`;

		return setValue(id, times);
	}, [openTime, closeTime, closed, fulltime]);

	const handleOpenTime = (time: string) => {
		setOpenTime(time);
	};

	const handleCloseTime = (time: string) => {
		setCloseTime(time);
	};

	const handleFulltime = () => {
		setFulltime(!fulltime);
		setClosed(false);
	};

	const handleClosed = () => {
		setClosed(!closed);
		setFulltime(false);
	};
	return (
		<div>
			<div className="flex gap-4 justify-between">
				<input className="hidden" id={id} {...register(id)} />
				<div
					className="
                flex
                flex-col
                items-start
                justify-between
                pb-1.5
            "
				>
					<label className="font-medium text-sm md:text-base">{day}:</label>
					<div className=" flex gap-2 items-center ">
						<input onChange={handleClosed} checked={closed} type="checkbox" />
						<label>Fechado</label>
					</div>

					<div className="flex gap-2 items-center">
						<input onChange={handleFulltime} checked={fulltime} type="checkbox" />
						<label>24 Horas</label>
					</div>
				</div>

				<div className="flex gap-4">
					<div>
						<label className="text-sm md:text-base">Abertura</label>
						<TimeInput
							defaultTime={openTime}
							disabled={fulltime || closed}
							onChange={handleOpenTime}
						/>
					</div>
					<div>
						<label className="text-sm md:text-base">Fechamento</label>
						<TimeInput
							defaultTime={closeTime}
							disabled={fulltime || closed}
							onChange={handleCloseTime}
						/>
					</div>
				</div>
			</div>
			<p>{error && "Campo obrigatório"}</p>
		</div>
	);
};

export default OpeningInput;
