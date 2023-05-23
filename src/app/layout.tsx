import "./globals.css";

import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import NavBar from "@/components/header/NavBar";
import Providers from "@/components/Providers";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import getCurrentUser from "@/actions/getCurrentUser";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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

	return (
		<html lang="en">
			<Providers>
				<body className={`${inter.variable} bg-white min-h-screen text-gray-900`}>
					<Toaster />
					<NavBar currentUser={user} />
					<LoginModal />
					<RegisterModal />
					<main className="w-full h-full pt-[82px]">{children}</main>
				</body>
			</Providers>
		</html>
	);
};

export default RootLayout;
