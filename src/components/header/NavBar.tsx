"use client";

import Container from "../Container";
import UserMenu from "./UserMenu";
import { User } from "@/interfaces";

interface NavBarProps {
	currentUser: User;
}

const NavBar = ({ currentUser }: NavBarProps) => {
	return (
		<header className="w-full fixed top-0 left-0 border-b-[1px] border-gray-100 shadow-sm">
			<Container>
				<div
					className="
                        w-full 
                        flex 
                        justify-between 
                        items-center
                        "
				>
					<h1>Logo</h1>
					<UserMenu currentUser={currentUser} />
				</div>
			</Container>
		</header>
	);
};

export default NavBar;
