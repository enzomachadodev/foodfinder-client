"use client";

interface DefaulInputProps {
	id: string;
	label: string;
	type?: string;
	disabled?: boolean;
	required?: boolean;
	register: any;
	error: boolean;
	errorMessage?: string;
}
const DefaultInput = ({
	id,
	label,
	type = "text",
	disabled,
	required,
	register,
	error,
	errorMessage,
}: DefaulInputProps) => {
	return (
		<div
			className="
                flex
                flex-col
            "
		>
			<label className="">{label}</label>

			<input
				id={id}
				disabled={disabled}
				required={required}
				type={type}
				{...register(id)}
				className={`
                block
                w-full 
                rounded-lg 
                border-0 
                py-3
                mt-2
                mb-1
                text-gray-900 
                shadow-sm 
                ring-1 
                ring-inset 
                ring-gray-300 
                placeholder:text-gray-400 
                focus:ring-2 
                focus:ring-inset 
                focus:ring-indigo-600 
                sm:leading-6
                outline-none
                transition
                disabled:opacity-70
                disabled:cursor-not-allowed
                pl-4
                ${error && " ring-rose-500"}
                ${error && "focus:ring-rose-500"}
                `}
			/>
			<p
				className="
                text-rose-500
                text-sm
                "
			>
				{errorMessage}
			</p>
		</div>
	);
};

export default DefaultInput;
