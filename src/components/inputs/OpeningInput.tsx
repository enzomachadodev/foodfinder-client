"use client";

import { useCallback, useEffect, useState } from "react";
import TimeInput from "./TimeInput";

interface OpeningInputProps {
	id: string;
	day: string;
	setValue: any;
	register: any;
	error: boolean;
	errorMessage?: string;
}

const OpeningInput = ({ id, day, register, error, setValue, errorMessage }: OpeningInputProps) => {
	const [openTime, setOpenTime] = useState("");
	const [closeTime, setCloseTime] = useState("");
	const [closed, setClosed] = useState(false);
	const [fulltime, setFulltime] = useState(false);

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
			<div
				className="
                flex
                gap-4
                justify-between
        "
			>
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
					<label>{day}:</label>
					<div
						className="
                    flex
                    gap-2
                    items-center
                "
					>
						<input onChange={handleClosed} checked={closed} type="checkbox" />
						<label>Fechado</label>
					</div>

					<div
						className="
                    flex
                    gap-2
                    items-center
                "
					>
						<input onChange={handleFulltime} checked={fulltime} type="checkbox" />
						<label>24 Horas</label>
					</div>
				</div>

				<div
					className="
                flex
                gap-4
        "
				>
					<div>
						<label>Abertura</label>
						<TimeInput disabled={fulltime || closed} onChange={handleOpenTime} />
					</div>
					<div>
						<label>Fechamento</label>
						<TimeInput disabled={fulltime || closed} onChange={handleCloseTime} />
					</div>
				</div>
			</div>
			<p>{error && "Campo obrigatório"}</p>
		</div>
	);
};

export default OpeningInput;
