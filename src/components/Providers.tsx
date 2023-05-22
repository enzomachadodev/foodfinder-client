"use client";

import { AuthProvider } from "@/contexts/authContext";
import { ModalProvider } from "@/contexts/modalContext";

interface ProviderProps {
	children: React.ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
	return (
		<ModalProvider>
			<AuthProvider>{children}</AuthProvider>
		</ModalProvider>
	);
};

export default Providers;
