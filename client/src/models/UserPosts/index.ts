import { createEffect, createStore } from "effector-logger";
import { Post } from "../../interfaces/models";

export const $UserPosts = createStore<Post[]>([], { name: "UserPosts" });

export const loadUserPostsFx = createEffect<void, Post[]>("loadUserPostsFx");

export const $LoadingUserPosts = createStore<boolean>(false);
