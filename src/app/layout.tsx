import "./globals.css";

import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import NavBar from "@/components/header/NavBar";
import Providers from "@/components/Providers";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import getCurrentUser from "@/actions/getCurrentUser";
import AddRestaurant from "@/components/modals/AddRestaurant";
import getCategories from "@/actions/getCategories";
import EditRestaurant from "@/components/modals/EditRestaurant";

export const metadata = {
	title: "Food Finder",
	description: "Os melhores restaurantes da cidade",
};

interface RootLayoutProps {
	children: React.ReactNode;
	ctx: any;
}

const RootLayout = async ({ children }: RootLayoutProps) => {
	const user = await getCurrentUser();
	const categories = await getCategories();

	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap"
					rel="stylesheet"
				/>
			</head>
			<Providers>
				<body className={`font-sans bg-white min-h-screen text-gray-900`}>
					<Toaster />
					<NavBar currentUser={user} />
					<LoginModal />
					<RegisterModal />
					<AddRestaurant categories={categories} />
					<EditRestaurant categories={categories} />
					<main className="w-full h-full pt-[82px]">{children}</main>
				</body>
			</Providers>
		</html>
	);
};

export default RootLayout;
