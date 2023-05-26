import { OpeningHours } from "@/interfaces";

const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

export const checkOpeningHours = (opening: OpeningHours) => {
	const date = new Date();
	const currentDay = date.getDay();
	const currentDayName = daysOfWeek[currentDay];
	const currentDayHours = opening[currentDayName];

	if (currentDayHours === "Fechado") {
		return {
			status: "Fechado",
		};
	}

	if (currentDayHours === "24 Horas") {
		return {
			status: "Aberto",
		};
	}

	const currentTime = date.getHours() * 60 + date.getMinutes();
	const [openHour, closeHour] = currentDayHours.split(" - ");

	const openTime = parseInt(openHour.split(":")[0]) * 60 + parseInt(openHour.split(":")[1]);
	const closeTime = parseInt(closeHour.split(":")[0]) * 60 + parseInt(closeHour.split(":")[1]);

	if (currentTime >= openTime && currentTime <= closeTime) {
		return {
			status: "Aberto",
		};
	} else {
		return {
			status: "Fechado",
		};
	}
};

export const checkStatus = ({
	date,
	time,
	opening,
}: {
	date: Date;
	time: string;
	opening: OpeningHours;
}) => {
	const currentDay = date.getDay();
	const currentDayName = daysOfWeek[currentDay];
	const currentDayHours = opening[currentDayName];

	if (currentDayHours === "Fechado") {
		return {
			status: "Fechado",
		};
	}

	if (currentDayHours === "24 Horas") {
		return {
			status: "Aberto",
		};
	}

	const userTime = parseInt(time.split(":")[0]) * 60 + parseInt(time.split(":")[1]);
	const [openHour, closeHour] = currentDayHours.split(" - ");

	const openTime = parseInt(openHour.split(":")[0]) * 60 + parseInt(openHour.split(":")[1]);
	const closeTime = parseInt(closeHour.split(":")[0]) * 60 + parseInt(closeHour.split(":")[1]);

	if (userTime >= openTime && userTime <= closeTime) {
		return {
			status: "Aberto",
		};
	} else {
		return {
			status: "Fechado",
		};
	}
};
