"use client";

import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
//import pt from "date-fns/locale/pt";

import "react-datepicker/dist/react-datepicker.css";

//registerLocale("pt", pt);

interface InputDateProps {
	date: Date | null;
	onChange: (date: Date | null) => void;
}

const DateInput = ({ date, onChange }: InputDateProps) => {
	return (
		<DatePicker
			//locale="pt"
			dateFormat={"dd/MM/yyyy"}
			className="
                block
                rounded-lg 
                border-0 
                w-[110px]
                md:w-[120px]
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
                outline-none
                transition
                px-4
                text-sm
                md:text-base
                !mx-0
                "
			selected={date}
			onChange={onChange}
		/>
	);
};

export default DateInput;
