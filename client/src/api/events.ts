import { mockSchoolEvents, mockServerResponse } from "../mocks";

export const loadEvents = () => {
	return mockServerResponse(300, mockSchoolEvents);
};
