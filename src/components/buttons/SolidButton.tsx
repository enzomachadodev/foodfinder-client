"use client";

interface SolidButtonProps {
	type: "button" | "submit" | "reset";
	label: string;
	onClick?: () => void;
}

const SolidButton = ({ type, label, onClick }: SolidButtonProps) => {
	return (
		<button
			onClick={onClick}
			type={type}
			className="
                flex 
                w-full 
                justify-center 
                rounded-lg 
                bg-indigo-600 
                px-3 
                py-3
                text-md 
                font-semibold 
                leading-6 
                text-white 
                shadow-sm 
                hover:bg-indigo-500 
                focus-visible:outline 
                focus-visible:outline-2 
                focus-visible:outline-offset-2 
                focus-visible:outline-indigo-600"
		>
			{label}
		</button>
	);
};

export default SolidButton;
