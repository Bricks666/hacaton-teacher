import { AddPostRequest } from "../interfaces/requests";
import { Post } from "../models/Posts";

export const createPost = (postRequest: AddPostRequest): Post => {
  debugger
	return {
		authorId: 1,
		authorName: "Joseph",
		authorPhoto: "https://avatars.githubusercontent.com/u/10513364?s=64&v=4",
		content: postRequest.post,
		id: Math.ceil(Math.random() * 1000),
	};
};
