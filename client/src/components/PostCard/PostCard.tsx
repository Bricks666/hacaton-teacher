import React, { FC } from "react";
import { ClassNameComponent } from "../../interfaces/common";
import { Post } from "../../ui/Post";
import { PostHeader } from "../../ui/PostHeader";

interface PostCardComponent
	extends ClassNameComponent,
		Omit<Parameters<typeof Post>[0], "Header"> {}

export const PostCard: FC<PostCardComponent> = (props) => {
	return <Post {...props} Header={PostHeader} />;
};
