"use client";

interface GhostButtonProps {
	type: "button" | "submit" | "reset";
	label: string;
	onClick?: () => void;
}

const GhostButton = ({ type, label, onClick }: GhostButtonProps) => {
	return (
		<button
			onClick={onClick}
			type={type}
			className="
                bg-none
                border-none
                hover:underline
            "
		>
			{label}
		</button>
	);
};

export default GhostButton;
