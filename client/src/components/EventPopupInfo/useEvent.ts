import { useEvents } from "../../hooks";

export const useEvent = (id: number | string | null) => {
	const events = useEvents();

	if (id === null) {
		return null;
	}

	return events.find((event) => event.id == id) || null;
};
