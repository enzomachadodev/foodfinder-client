"use client";

import Container from "../Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import { User } from "@/interfaces";

interface NavBarProps {
	currentUser: User;
}

const NavBar = ({ currentUser }: NavBarProps) => {
	return (
		<header className="w-full fixed z-10 top-0 left-0 bg-white border-b-[1px] border-gray-100 shadow-sm">
			<Container>
				<div
					className="
                        w-full 
                        flex 
                        justify-between 
                        items-center
                        "
				>
					<Logo />
					<UserMenu currentUser={currentUser} />
				</div>
			</Container>
		</header>
	);
};

export default NavBar;
