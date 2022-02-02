import { createEffect, createStore } from "effector-logger";

export interface Post {
	readonly id: number;
	readonly authorId: number;
	readonly authorName: string;
	readonly authorPhoto: string;
	readonly content: string;
}

export const $Posts = createStore<Post[]>([], { name: "Posts" });

export const loadPostsFx = createEffect<void, Post[]>("loadPostsFx");

export const $LoadingPosts = createStore<boolean>(false, {
	name: "loadingPostsStore",
});
