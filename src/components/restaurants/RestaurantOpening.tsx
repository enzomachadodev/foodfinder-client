import { Opening, OpeningHours } from "@/interfaces";
import React from "react";
import checkOpeningHours from "@/actions/checkOpeningHours";

interface RestaurantOpeningProps {
	opening: Opening;
}

const RestaurantOpening = ({ opening }: RestaurantOpeningProps) => {
	const openingHours: OpeningHours = {
		...opening,
	};

	const isOpen = checkOpeningHours(openingHours);

	return (
		<div
			className="
            order-first 
            mb-10 
            md:order-last 
            md:col-span-1
            "
		>
			<div>
				<span>{isOpen.status}</span>
				<p>{isOpen.nextOpen}</p>
			</div>
			<div>
				<h3>Horarios de Funcionamento:</h3>
				<ul>
					<li>Domingo: {opening.sunday}</li>
					<li>Segunda-feira: {opening.monday}</li>
					<li>Terça-feira: {opening.tuesday}</li>
					<li>Quarta-feira: {opening.wednesday}</li>
					<li>Quinta-feira: {opening.thursday}</li>
					<li>Sexta-feira: {opening.friday}</li>
					<li>Sabado: {opening.saturday}</li>
				</ul>
			</div>
		</div>
	);
};

export default RestaurantOpening;
