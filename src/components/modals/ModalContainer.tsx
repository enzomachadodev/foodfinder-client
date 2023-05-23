"use client";

import { IoMdClose } from "react-icons/io";

import { useEffect, useState } from "react";

interface ModalProps {
	isOpen?: boolean;
	onClose: () => void;
	title?: string;
	children: React.ReactNode;
}

const ModalContainer = ({ isOpen, onClose, title, children }: ModalProps) => {
	const [showModal, setShowModal] = useState(isOpen);

	useEffect(() => {
		setShowModal(isOpen);
	}, [isOpen]);

	if (!showModal) {
		return null;
	}

	return (
		<div
			className="
                fixed 
                z-50
                inset-0 
                bg-gray-500/75
                transition-opacity
                overflow-x-hidden
                overflow-y-auto
                flex
                justify-between
                items-center
            "
		>
			<div
				className="
                    relative
                    w-full
                    md:w-4/6
                    lg:w-3/6
                    xl:w-2/5
                    mx-auto
                    h-full
                    lg:h-auto
                    md:h-auto
                    overflow-hidden
                "
			>
				<div
					className={`
                    relative
                    translate
                    duration-300
                    ${showModal ? "opacity-100" : "opacity-0"}
                    ${showModal ? "translate-y-0" : "translate-y-full"}
                    h-full
                    w-full
                    md:h-auto
                    lg:h-auto
                    md:rounded-lg
                    md:shadow-lg
                    flex
                    flex-col
                    justify-start
                    overflow-y-auto
                    bg-white
                    p-8
                `}
				>
					<button
						onClick={onClose}
						className="
                            p-1
                            border-none
                            hover:opacity-70
                            transition
                            absolute
                            top-4
                            right-4
                        "
					>
						<IoMdClose size={20} />
					</button>
					<div className="mx-auto w-full mb-10">
						<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
							{title}
						</h2>
					</div>
					{children}
				</div>
			</div>
		</div>
	);
};

export default ModalContainer;
