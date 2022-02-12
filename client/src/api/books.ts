import { mockBooks, mockServerResponse } from "../mocks";

export const getBooks = async () => {
	return mockServerResponse(300, mockBooks);
};
