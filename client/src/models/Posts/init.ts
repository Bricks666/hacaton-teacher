import { forward, guard, sample } from "effector";
import {
	$LoadingPosts,
	$Posts,
	addPostFx,
	loadPostsFx,
	addPost,
	loadUserPostsFx,
	$UserPosts,
	$LoadingUserPosts,
	loadPosts,
	loadUserPosts,
	savePost,
} from ".";
import { mockServerResponse, mockUserPosts } from "../../mocks";
import { mockPosts } from "../../mocks/mockPosts";
import { createPost } from "../../utils";

loadPostsFx.use(async () => {
	return await mockServerResponse(250, mockPosts);
});
addPostFx.use(async (newPost) => await mockServerResponse(250, newPost));
loadUserPostsFx.use(
	async (userId) =>
		await mockServerResponse(
			300,
			mockUserPosts.filter((post) => post.authorId === userId)
		)
);

sample({
	clock: loadPostsFx.doneData,
	target: $Posts,
});

forward({
	from: loadPostsFx.pending,
	to: $LoadingPosts,
});

guard({
	clock: loadPosts,
	filter: sample({
		source: loadPostsFx.pending,
		fn: (isLoading) => !isLoading,
	}),
	target: loadPostsFx,
});

sample({
	clock: addPostFx.doneData,
	fn: createPost,
	target: savePost,
});

sample({
	source: $Posts,
	clock: savePost,
	fn: (posts, post) => [...posts, post],
	target: $Posts,
});

guard({
	clock: addPost,
	filter: sample({
		source: addPostFx.pending,
		fn: (isLoading) => !isLoading,
	}),
	target: addPostFx,
});

forward({
	from: loadUserPostsFx.doneData,
	to: $UserPosts,
});

forward({
	from: loadUserPostsFx.pending,
	to: $LoadingUserPosts,
});

guard({
	clock: loadUserPosts,
	filter: sample({
		source: loadUserPostsFx.pending,
		fn: (isLoading) => !isLoading,
	}),
	target: loadUserPostsFx,
});
