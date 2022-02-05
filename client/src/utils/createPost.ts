import { AddPostRequest } from "../interfaces/requests";
import { Post } from "../interfaces/models";

export const createPost = (postRequest: AddPostRequest): Post => {
	return {
		authorId: 1,
		authorName: "Joseph",
		authorPhoto: "https://avatars.githubusercontent.com/u/10513364?s=64&v=4",
		content: postRequest.content,
		id: Math.ceil(Math.random() * 1000),
	};
};
