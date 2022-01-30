export const mockServerResponse = <T>(timeout: number, response: T) => {
	return new Promise<T>((resolve) => {
		setTimeout(() => resolve(response), timeout);
	});
};
