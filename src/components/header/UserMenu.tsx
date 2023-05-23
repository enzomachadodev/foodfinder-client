"use client";

import { useContext, useState } from "react";
import GhostButton from "../buttons/GhostButton";
import SolidButton from "../buttons/SolidButton";
import { ModalContext } from "@/contexts/modalContext";
import { User } from "@/interfaces";
import Avatar from "./Avatar";
import { CiLogout } from "react-icons/ci";
import { MdAddBusiness, MdFoodBank, MdLogout } from "react-icons/md";

interface UserBoxProps {
	currentUser: User | null;
}

const UserMenu = ({ currentUser }: UserBoxProps) => {
	const { useLoginModal, useRegisterModal } = useContext(ModalContext);
	const [openMenu, setOpenMenu] = useState(false);

	const loginModal = useLoginModal();
	const registerModal = useRegisterModal();

	if (!currentUser) {
		return (
			<div
				className="
                flex
                gap-4
            "
			>
				<GhostButton onClick={loginModal.onOpen} type="button" label="Entrar" />
				<SolidButton onClick={registerModal.onOpen} type="button" label="Registre-se" />
			</div>
		);
	}
	return (
		<div
			className="
				relative
				
		"
		>
			<div
				className="
						flex
						items-center
						gap-2
			"
			>
				<h2>{currentUser.name}</h2>
				<Avatar
					image={currentUser.image}
					logout={() => {}}
					onClick={() => setOpenMenu(!openMenu)}
				/>
			</div>
			{openMenu && (
				<div
					className="
							absolute 
							right-0 
							z-10 
							mt-2 
							w-56 
							origin-top-right 
							rounded-md 
							bg-white 
							shadow-lg 
							ring-1 
							ring-black 
							ring-opacity-5 
							focus:outline-none
							overflow-hidden
							"
				>
					<div
						className="
							w-full
							p-2
							flex
							items-center
							gap-2
							text-indigo-500
							hover:bg-gray-100
							cursor-pointer
					"
					>
						<MdAddBusiness size={18} />
						Adicionar Restaurante
					</div>
					<div
						className="
							w-full
							p-2
							flex
							items-center
							gap-2
							hover:bg-gray-100
							cursor-pointer
					"
					>
						<MdFoodBank size={18} />
						Meus estabelecimentos
					</div>
					<div
						className="
							w-full
							p-2
							flex
							items-center
							gap-2
							hover:bg-gray-100
							cursor-pointer
					"
					>
						<MdLogout size={18} />
						Logout
					</div>
				</div>
			)}
		</div>
	);
};

export default UserMenu;
