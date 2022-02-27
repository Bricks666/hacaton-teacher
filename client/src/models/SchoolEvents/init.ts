import { forward, guard, sample } from "effector";
import { $SchoolEvents, loadSchoolEventsEvent, loadSchoolEventsFx } from ".";
import { loadEvents } from "../../api";

loadSchoolEventsFx.use(loadEvents);

forward({
	from: loadSchoolEventsFx.doneData,
	to: $SchoolEvents,
});

guard({
	clock: loadSchoolEventsEvent,
	filter: sample({
		source: loadSchoolEventsFx.pending,
		fn: (isLoading) => !isLoading,
	}),
	target: loadSchoolEventsFx,
});
