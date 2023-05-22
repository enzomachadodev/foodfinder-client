"use client";

import { useContext, useEffect, useState } from "react";
import GhostButton from "../buttons/GhostButton";
import SolidButton from "../buttons/SolidButton";
import { ModalContext } from "@/contexts/modalContext";
import { AuthContext } from "@/contexts/authContext";
import { User } from "@/interfaces";
import Avatar from "./Avatar";

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
				<div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"></div>
			)}
		</div>
	);
};

export default UserMenu;
