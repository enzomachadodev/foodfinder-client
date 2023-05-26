import { RestaurantComplete } from "@/interfaces";
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
	useRestaurantModal: (type: "create" | "update" | "delete") => {
		isOpen: boolean;
		onOpen: () => void;
		onClose: () => void;
	};
	useCheckDate: () => {
		isOpen: boolean;
		onOpen: () => void;
		onClose: () => void;
	};
	currentRestaurant: RestaurantComplete | null;
	setCurrentRestaurant: React.Dispatch<React.SetStateAction<RestaurantComplete | null>>;
}

interface IModalProviderProps {
	children: React.ReactNode;
}

export const ModalContext = createContext({} as IModalContextData);

export const ModalProvider = ({ children }: IModalProviderProps) => {
	const [login, setLogin] = useState(false);
	const [register, setRegister] = useState(false);
	const [addRestaurant, setAddRestaurant] = useState(false);
	const [editRestaurant, setEditRestaurant] = useState(false);
	const [deleteRestaurant, setDeleteRestaurant] = useState(false);
	const [checkDate, setCheckDate] = useState(false);
	const [currentRestaurant, setCurrentRestaurant] = useState<RestaurantComplete | null>(null);

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

	const useRestaurantModal = (type: "create" | "update" | "delete") => {
		if (type === "create") {
			return {
				isOpen: addRestaurant,
				onOpen: () => setAddRestaurant(true),
				onClose: () => setAddRestaurant(false),
			};
		} else if (type === "update") {
			return {
				isOpen: editRestaurant,
				onOpen: () => setEditRestaurant(true),
				onClose: () => setEditRestaurant(false),
			};
		} else {
			return {
				isOpen: deleteRestaurant,
				onOpen: () => setDeleteRestaurant(true),
				onClose: () => setDeleteRestaurant(false),
			};
		}
	};

	const useCheckDate = () => {
		return {
			isOpen: checkDate,
			onOpen: () => setCheckDate(true),
			onClose: () => setCheckDate(false),
		};
	};

	return (
		<ModalContext.Provider
			value={{
				currentRestaurant,
				useCheckDate,
				setCurrentRestaurant,
				useRestaurantModal,
				useLoginModal,
				useRegisterModal,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};
