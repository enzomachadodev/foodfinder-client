"use client";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Category } from "@/interfaces";

interface CategorySelectProps {
	categories: Category[];
	id: string;
	label: string;
	register: any;
	error: boolean;
	errorMessage?: string;
}

const CategorySelect = ({
	categories,
	id,
	label,
	register,
	error,
	errorMessage,
}: CategorySelectProps) => {
	const options = categories.map((c: Category) => ({ value: c.id, label: c.name }));
	return (
		<div>
			<label>{label}</label>
			<div
				className="
                relative
        "
			>
				<span
					className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-2xl
            "
				>
					<MdOutlineKeyboardArrowDown />
				</span>
				<select
					id={id}
					{...register(id)}
					defaultValue={""}
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
                px-4
                bg-white
                appearance-none
                ${error && " ring-rose-500"}
                ${error && "focus:ring-rose-500"}
                `}
				>
					<option value="">Selecione</option>
					{options.map((o) => (
						<option key={o.value} value={o.value}>
							{o.label}
						</option>
					))}
				</select>
			</div>
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

export default CategorySelect;
