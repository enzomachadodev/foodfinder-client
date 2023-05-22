import { createContext, useState } from "react";

interface IModalContextData {
	useLoginModal: () => {
		isOpen: boolean;
		onOpen: () => void;
		onClose: () => void;
	};
	useRegisterModal: () => {
		isOpen: boolean;
		onOpen: () => void;
		onClose: () => void;
	};
}

interface IModalProviderProps {
	children: React.ReactNode;
}

export const ModalContext = createContext({} as IModalContextData);

export const ModalProvider = ({ children }: IModalProviderProps) => {
	const [login, setLogin] = useState(false);
	const [register, setRegister] = useState(false);

	const useLoginModal = () => {
		return {
			isOpen: login,
			onOpen: () => setLogin(true),
			onClose: () => setLogin(false),
		};
	};

	const useRegisterModal = () => {
		return {
			isOpen: register,
			onOpen: () => setRegister(true),
			onClose: () => setRegister(false),
		};
	};

	return (
		<ModalContext.Provider value={{ useLoginModal, useRegisterModal }}>
			{children}
		</ModalContext.Provider>
	);
};
