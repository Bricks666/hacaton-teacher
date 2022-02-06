import { createDomain } from "effector-logger";
import { AddPostRequest } from "../../interfaces/requests";

export interface Post {
	readonly id: number;
	readonly authorId: number;
	readonly authorName: string;
	readonly authorPhoto: string;
	readonly content: string;
}

export const PostsDomain = createDomain("PostsDomain");

export const $Posts = PostsDomain.createStore<Post[]>([], {
	name: "PostsStore",
});
export const $LoadingPosts = PostsDomain.createStore<boolean>(false, {
	name: "loadingPostsStore",
});
export const $UserPosts = PostsDomain.createStore<Post[]>([], {
	name: "UserPosts",
});
export const $LoadingUserPosts = PostsDomain.createStore<boolean>(false, {
	name: "LoadingUserPosts",
});

export const loadPostsFx = PostsDomain.createEffect<void, Post[]>(
	"loadPostsFx"
);
export const addPostFx = PostsDomain.createEffect<
	AddPostRequest,
	AddPostRequest
>("addPostFx");
export const loadUserPostsFx = PostsDomain.createEffect<number, Post[]>(
	"loadUserPostsFx"
);

export const savePost = PostsDomain.createEvent<Post>("savePost");
export const addPost = PostsDomain.createEvent<Post>("addPostsEvent");
export const loadPosts = PostsDomain.createEvent<void>("loadPosts");
export const loadUserPosts = PostsDomain.createEvent<number>("loadUserPosts");
