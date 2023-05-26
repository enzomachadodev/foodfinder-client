"use client";

import { Address } from "@/interfaces";

interface RestaurantLocationProps {
	address: Address;
}

const RestaurantLocation = ({ address }: RestaurantLocationProps) => {
	return (
		<div className="w-full">
			<h3 className="text-lg font-medium mb-2">Localização:</h3>
			<ul className="flex flex-col gap-2">
				<li className="flex gap-2 w-full items-center justify-between px-4">
					Rua: <span>{address.street}</span>
				</li>
				<hr />
				<li className="flex gap-2 w-full items-center justify-between px-4">
					Número: <span>{address.number}</span>
				</li>
				<hr />
				{address.complement && (
					<>
						<li className="flex gap-2 w-full items-center justify-between px-4">
							Complemento: <span>{address.complement}</span>
						</li>
						<hr />
					</>
				)}

				<li className="flex gap-2 w-full items-center justify-between px-4">
					Cidade: <span>{address.city}</span>
				</li>
				<hr />
				<li className="flex gap-2 w-full items-center justify-between px-4">
					Estado: <span>{address.state}</span>
				</li>
				<hr />
				<li className="flex gap-2 w-full items-center justify-between px-4">
					CEP: <span>{address.zipCode}</span>
				</li>
			</ul>
		</div>
	);
};

export default RestaurantLocation;
