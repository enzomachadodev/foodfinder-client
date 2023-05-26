import { Opening, OpeningHours } from "@/interfaces";
import React, { useContext } from "react";
import { checkOpeningHours } from "@/utils/checkOpeningHours";
import SolidButton from "../buttons/SolidButton";
import { ModalContext } from "@/contexts/modalContext";

interface RestaurantOpeningProps {
	opening: Opening;
}

const RestaurantOpening = ({ opening }: RestaurantOpeningProps) => {
	const { useCheckDate } = useContext(ModalContext);
	const checkDateModal = useCheckDate();

	const openingHours: OpeningHours = {
		...opening,
	};

	const isOpen = checkOpeningHours(openingHours);

	return (
		<div
			className="
            order-first 
            mb-10 
            md:col-span-1
            "
		>
			<div>
				<SolidButton
					onClick={checkDateModal.onOpen}
					type="button"
					label="Conferir Horário"
				/>
				<div className="text-lg font-medium my-4">
					Status:{" "}
					<span
						className={`p-1 rounded-lg text-base font-normal text-gray-800 ${
							isOpen.status === "Fechado" ? "bg-red-500/70" : "bg-green-500/70"
						}`}
					>
						{isOpen.status}
					</span>
				</div>
			</div>
			<div className="w-full">
				<h3 className="text-lg font-medium mb-2">Horarios de Funcionamento:</h3>
				<ul className="flex flex-col gap-2">
					<li className="flex gap-2 w-full items-center justify-between px-4">
						Domingo: <span>{opening.sunday}</span>
					</li>
					<hr />
					<li className="flex gap-2 w-full items-center justify-between px-4">
						Segunda-feira: <span>{opening.monday}</span>
					</li>
					<hr />
					<li className="flex gap-2 w-full items-center justify-between px-4">
						Terça-feira: <span>{opening.tuesday}</span>
					</li>
					<hr />
					<li className="flex gap-2 w-full items-center justify-between px-4">
						Quarta-feira: <span>{opening.wednesday}</span>
					</li>
					<hr />
					<li className="flex gap-2 w-full items-center justify-between px-4">
						Quinta-feira: <span>{opening.thursday}</span>
					</li>
					<hr />
					<li className="flex gap-2 w-full items-center justify-between px-4">
						Sexta-feira: <span>{opening.friday}</span>
					</li>
					<hr />
					<li className="flex gap-2 w-full items-center justify-between px-4">
						Sabado: <span>{opening.saturday}</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default RestaurantOpening;
