"use client";

import { ModalProvider } from "@/contexts/modalContext";

interface ProviderProps {
	children: React.ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
	return <ModalProvider>{children}</ModalProvider>;
};

export default Providers;
