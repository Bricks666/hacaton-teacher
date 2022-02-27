import { useStore } from "effector-react";
import { useEffect } from "react";
import { $SchoolEvents, loadSchoolEventsEvent } from "../models/SchoolEvents";

export const useEvents = () => {
	const events = useStore($SchoolEvents);

	useEffect(() => {
		if (!events.length) {
			loadSchoolEventsEvent();
		}
	}, [events.length]);

	return events;
};
