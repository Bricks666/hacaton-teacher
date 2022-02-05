import { createEffect, createEvent, createStore } from "effector-logger";
import { Post } from "../../interfaces/models";
import { AddPostRequest } from "../../interfaces/requests";

export const $Posts = createStore<Post[]>([], { name: "Posts" });

export const loadPostsFx = createEffect<void, Post[]>("loadPostsFx");

export const addPostFx = createEffect<AddPostRequest, AddPostRequest>(
	"addPostFx"
);
export const addPost = createEvent<Post>("addPostsEvent");

export const $LoadingPosts = createStore<boolean>(false, {
	name: "loadingPostsStore",
});
