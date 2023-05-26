"use client";

import { useRouter } from "next/navigation";
import Container from "./Container";
import SolidButton from "./buttons/SolidButton";

const EmptyState = () => {
	const router = useRouter();

	const handleClick = () => {
		router.replace("/");
	};
	return (
		<Container>
			<div className="w-full h-[50vh] flex flex-col items-center justify-center gap-8">
				<h1 className="text-xl font-bold">Ops! Algo Deu errado</h1>
				<SolidButton
					onClick={handleClick}
					label="Voltar"
					type="button"
					className="max-w-sm"
				/>
			</div>
		</Container>
	);
};

export default EmptyState;
