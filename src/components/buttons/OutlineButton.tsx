"use client";

interface SolidButtonProps {
	type: "button" | "submit" | "reset";
	label: string;
	onClick?: () => void;
	className?: string;
}

const OutlineButton = ({ type, label, onClick, className = "" }: SolidButtonProps) => {
	return (
		<button
			onClick={onClick}
			type={type}
			className={`
                                ${className}
                                flex 
                                w-full 
                                justify-center 
                                rounded-lg
                                border-2
                                border-indigo-500
                                px-3 
                                py-3
                                text-md 
                                font-semibold 
                                leading-6 
                                text-indigo-500 
                                hover:bg-indigo-100
                                transition
                                duration-200

                                shadow-sm 
                               `}
		>
			{label}
		</button>
	);
};

export default OutlineButton;
