import { createDomain } from "effector-logger";

export interface SchoolEvent {
	readonly id: number;
	readonly header: string;
	readonly photo: string;
	readonly date: string;
	readonly place: string;
	readonly content?: string;
}

export const SchoolEventsDomain = createDomain("SchoolEventsDomain");

export const $SchoolEvents = SchoolEventsDomain.createStore<SchoolEvent[]>([], {
	name: "SchoolEvents",
});

export const loadSchoolEventsFx = SchoolEventsDomain.createEffect<
	void,
	SchoolEvent[]
>("loadSchoolEventFx");

export const loadSchoolEventsEvent = SchoolEventsDomain.createEvent<void>(
	"loadSchoolEventsEvent"
);
