"use client";

import { CldUploadWidget } from "next-cloudinary";
import { AiOutlineCloudUpload } from "react-icons/ai";

declare global {
	var cloudinary: any;
}

const uploadPreset = "eh3bguuv";

interface ImageUploadProps {
	id: string;
	label: string;
	disabled?: boolean;
	required?: boolean;
	register: any;
	error: boolean;
	errorMessage?: string;
	setValue: any;
	setFocus: any;
}

const ImageUpload = ({
	id,
	label,
	disabled,
	required,
	register,
	error,
	errorMessage,
	setValue,
}: ImageUploadProps) => {
	const handleUpload = (result: any) => {
		setValue(id, result.info.secure_url);
	};

	return (
		<CldUploadWidget
			onUpload={handleUpload}
			uploadPreset={uploadPreset}
			options={{
				maxFiles: 1,
			}}
		>
			{({ open }) => {
				return (
					<div className="flex flex-col">
						<label className="">{label}</label>
						<div
							className="
                                w-full
                                flex
                                gap-2
                                items-center
                        "
						>
							<input
								id={id}
								disabled={disabled}
								required={required}
								type="text"
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
							<button
								onClick={() => open?.()}
								className="
                                    h-[48px]
                                    flex
                                    items-center
                                    justify-center
                                    bg-indigo-500
                                    rounded-lg 
                                    border-0
                                    px-4
                                    mt-2
                                    mb-1
                                    hover:bg-indigo-400
                                    text-white
                                    
                        "
							>
								<AiOutlineCloudUpload size={28} />
							</button>
						</div>
						<p className="text-rose-500 text-sm">{errorMessage}</p>
					</div>
				);
			}}
		</CldUploadWidget>
	);
};

export default ImageUpload;
