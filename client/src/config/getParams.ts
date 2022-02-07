interface GetParams {
	readonly popups: string;
	readonly postId: string;
	readonly performanceId: string;
}

export const GET_PARAMS: GetParams = {
	popups: "popups",
	postId: "post-id",
	performanceId: "performance-id",
};

interface Popups {
	readonly post: string;
	readonly userBlog: string;
	readonly userPerformance: string;
	readonly performance: string;
}

export const POPUPS: Popups = {
	post: "post",
	userBlog: "user-blog",
	userPerformance: "user-performance",
	performance: "performance",
};
