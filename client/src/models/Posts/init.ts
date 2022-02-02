import { addPost } from "./index";
import { forward, sample } from "effector";
import { $LoadingPosts, $Posts, addPostFx, loadPostsFx } from ".";
import { mockServerResponse } from "../../mocks";
import { mockPosts } from "../../mocks/mockPosts";
import { createPost } from "../../utils";

sample({
	clock: loadPostsFx.doneData,
	target: $Posts,
	name: "Pass posts to PostsStore",
});

loadPostsFx.use(async () => {
	return await mockServerResponse(250, mockPosts);
});

addPostFx.use(async (newPost) => await mockServerResponse(250, newPost));

forward({
	from: loadPostsFx.pending,
	to: $LoadingPosts,
});

sample({
	clock: addPostFx.doneData,
	fn: createPost,
	target: addPost,
});

sample({
	source: $Posts,
	clock: addPost,
	fn: (posts, post) => [...posts, post],
	target: $Posts,
});
