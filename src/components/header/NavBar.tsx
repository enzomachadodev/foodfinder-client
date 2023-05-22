"use client";

import Container from "../Container";
import UserMenu from "./UserMenu";
import { useContext } from "react";
import { AuthContext } from "@/contexts/authContext";

const NavBar = () => {
	const { currentUser } = useContext(AuthContext);

	return (
		<header className="w-full fixed top-0 left-0">
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
