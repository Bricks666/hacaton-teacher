import { createEffect, createEvent, createStore } from "effector-logger";
import { AddPostRequest } from "../../interfaces/requests";

export interface Post {
	readonly id: number;
	readonly authorId: number;
	readonly authorName: string;
	readonly authorPhoto: string;
	readonly content: string;
}

export const $Posts = createStore<Post[]>([], { name: "Posts" });

export const loadPostsFx = createEffect<void, Post[]>("loadPostsFx");

export const addPostFx = createEffect<AddPostRequest, AddPostRequest>(
	"addPostFx"
);
export const addPost = createEvent<Post>("addPostsEvent");

export const $LoadingPosts = createStore<boolean>(false, {
	name: "loadingPostsStore",
});
