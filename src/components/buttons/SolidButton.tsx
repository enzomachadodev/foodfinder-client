"use client";

import { IconType } from "react-icons";

interface SolidButtonProps {
	type: "button" | "submit" | "reset";
	label?: string;
	onClick?: () => void;
	className?: string;
	Icon?: IconType;
	disabled?: boolean;
}

const SolidButton = ({
	type,
	label,
	onClick,
	className = "",
	Icon,
	disabled,
}: SolidButtonProps) => {
	return (
		<button
			onClick={onClick}
			type={type}
			disabled={disabled}
			className={`
                                ${className}
                                flex 
                                gap-2
                                items-center
                                w-full 
                                justify-center 
                                rounded-lg 
                                bg-indigo-600 
                                border-2
                                border-indigo-600 
                                px-3 
                                py-3
                                text-md 
                                font-semibold 
                                leading-6 
                                text-white 
                                shadow-sm 
                                hover:bg-indigo-500
                                hover:border-indico-500
                                disabled:opacity-60
                                disabled:pointer-events-none`}
		>
			{Icon && <Icon size={20} />}
			{label}
		</button>
	);
};

export default SolidButton;
