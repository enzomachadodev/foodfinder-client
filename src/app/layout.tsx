import "./globals.css";

import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import NavBar from "@/components/header/NavBar";
import Providers from "@/components/Providers";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";

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
	return (
		<html lang="en">
			<Providers>
				<body className={`${inter.variable} bg-gray-200 min-h-screen text-gray-900`}>
					<Toaster />
					<NavBar />
					<LoginModal />
					<RegisterModal />
					<main className="w-full h-full pt-[82px]">{children}</main>
				</body>
			</Providers>
		</html>
	);
};

export default RootLayout;
