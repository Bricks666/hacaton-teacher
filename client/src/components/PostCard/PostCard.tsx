import React, { FC } from "react";
import { ClassNameComponent, ExtractProps } from "../../interfaces/common";
import { Post } from "../../ui/Post";
import { CardHeader } from "../../ui/CardHeader";

interface PostCardComponent
	extends ClassNameComponent,
		ExtractProps<typeof Post, "Header"> {}

export const PostCard: FC<PostCardComponent> = (props) => {
	const link = `/profile/${props.authorId}`;
	return (
		<Post
			{...props}
			Header={<CardHeader header={props.authorName} link={link} />}
		/>
	);
};
