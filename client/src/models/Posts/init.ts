import { forward, sample } from "effector";
import { $LoadingPosts, $Posts, loadPostsFx } from ".";
import { mockServerResponse } from "../../mocks";
import { mockPosts } from "../../mocks/mockPosts";

sample({
	clock: loadPostsFx.doneData,
	target: $Posts,
	name: "Pass posts to PostsStore",
});

loadPostsFx.use(async () => {
	return await mockServerResponse(250, mockPosts);
});

forward({
	from: loadPostsFx.pending,
	to: $LoadingPosts,
});
