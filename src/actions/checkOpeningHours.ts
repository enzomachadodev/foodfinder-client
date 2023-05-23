import { OpeningHours } from "@/interfaces";

const getNextOpeningDay = (opening: OpeningHours): number => {
	const daysOfWeek: string[] = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const currentDay: number = new Date().getDay();
	let nextDay: number = currentDay + 1;

	while (true) {
		if (nextDay >= daysOfWeek.length) {
			nextDay = 0;
		}

		const nextDayOfWeek: string = daysOfWeek[nextDay];
		const openingHours: string = opening[nextDayOfWeek];

		if (openingHours && openingHours !== "fechado") {
			return nextDay;
		}

		nextDay++;
	}
};

const checkOpeningHours = (opening: OpeningHours): { status: string; nextOpen: string } => {
	const daysOfWeek: string[] = [
		"sunday",
		"monday",
		"tuesday",
		"wednesday",
		"thursday",
		"friday",
		"saturday",
	];
	const currentDay: number = new Date().getDay();
	const currentDayOfWeek: string = daysOfWeek[currentDay];

	const openingHours: string = opening[currentDayOfWeek];
	if (!openingHours) {
		return { status: "Indisponível", nextOpen: "" };
	}

	if (openingHours === "fulltime") {
		return { status: "Aberto 24 horas", nextOpen: "" };
	}

	if (openingHours === "fechado") {
		const nextOpeningDay: number = getNextOpeningDay(opening);
		const nextOpeningDayOfWeek: string = daysOfWeek[nextOpeningDay];

		const nextOpeningHours: string = opening[nextOpeningDayOfWeek];
		const [openingTime]: string[] = nextOpeningHours.split(" - ");

		return {
			status: "Fechado",
			nextOpen: `Abrindo no próximo ${nextOpeningDayOfWeek} às ${openingTime}`,
		};
	}

	const [openingTime, closingTime]: string[] = openingHours.split(" - ");
	const currentTime: Date = new Date();
	const currentTimestamp: number = currentTime.getTime();

	const openingTimestamp: number = new Date(
		currentTime.toDateString() + " " + openingTime
	).getTime();
	const closingTimestamp: number = new Date(
		currentTime.toDateString() + " " + closingTime
	).getTime();

	if (currentTimestamp >= openingTimestamp && currentTimestamp <= closingTimestamp) {
		const timeRemaining: number = closingTimestamp - currentTimestamp;
		const minutesRemaining: number = Math.floor((timeRemaining / 1000 / 60) % 60);
		const hoursRemaining: number = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);

		return {
			status: "Aberto",
			nextOpen: `Fechando em ${hoursRemaining} horas e ${minutesRemaining} minutos`,
		};
	} else {
		const timeToOpen: number = openingTimestamp - currentTimestamp;
		const minutesToOpen: number = Math.floor((timeToOpen / 1000 / 60) % 60);
		const hoursToOpen: number = Math.floor((timeToOpen / (1000 * 60 * 60)) % 24);

		return {
			status: "Fechado",
			nextOpen: `Abrindo em ${hoursToOpen} horas e ${minutesToOpen} minutos`,
		};
	}
};

export default checkOpeningHours;
