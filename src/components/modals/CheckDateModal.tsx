"use client";
import { useContext, useState } from "react";

import { ModalContext } from "@/contexts/modalContext";

import ModalContainer from "./ModalContainer";
import SolidButton from "../buttons/SolidButton";
import OutlineButton from "../buttons/OutlineButton";
import TimeInput from "../inputs/TimeInput";
import DateInput from "../inputs/DateInput";
import { toast } from "react-hot-toast";
import { checkStatus } from "@/utils/checkOpeningHours";
import { OpeningHours } from "@/interfaces";

const CheckDateModal = () => {
	const { useCheckDate, currentRestaurant } = useContext(ModalContext);
	const [response, setResponse] = useState("");
	const [date, setDate] = useState<Date | null>(null);
	const [time, setTime] = useState("00:00");

	const checkDateModal = useCheckDate();

	const handleClose = () => {
		setResponse("");
		checkDateModal.onClose();
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (time == "") {
			return toast.error("Selecione um horário");
		}

		if (date == null) {
			return toast.error("Selecione uma data");
		}

		if (!currentRestaurant) {
			return toast.error("Ops! Algo deu errado");
		}

		const data = { date: date, time: time, opening: currentRestaurant.opening as OpeningHours };

		const result = checkStatus(data);

		setResponse(result.status);
	};

	return (
		<ModalContainer
			isOpen={checkDateModal.isOpen}
			onClose={handleClose}
			title="Confira o Funcionamento"
		>
			<div className="flex gap-2 items-center">
				<form className="w-full" onSubmit={handleSubmit}>
					<h3 className="text-lg font-medium text-center mb-4">
						Selecione um horário e uma data:
					</h3>
					<div className="flex items-center justify-center gap-4 w-fit mx-auto">
						<TimeInput
							className="flex flex-nowrap"
							disabled={false}
							onChange={(time) => setTime(time)}
						/>
						<DateInput date={date} onChange={(value) => setDate(value)} />
					</div>
					<div className="my-4 flex items-center justify-center gap-1">
						<span className="text-lg font-medium">Status:</span>
						{response && (
							<span
								className={`p-1 rounded-lg text-base font-normal text-gray-800 ${
									response === "Fechado" ? "bg-red-500/70" : "bg-green-500/70"
								}`}
							>
								{response}
							</span>
						)}
					</div>

					<div className="flex gap-4 items-center mt-8">
						<OutlineButton onClick={handleClose} type="button" label="Cancelar" />
						<SolidButton type="submit" label="Verificar" />
					</div>
				</form>
			</div>
		</ModalContainer>
	);
};

export default CheckDateModal;
