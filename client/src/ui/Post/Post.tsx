import classNames from "classnames";
import React, { FC, ReactNode } from "react";
import { ClassNameProps } from "../../interfaces/common";
import { BlockWrapper } from "../BlockWrapper";
import { Link } from "../Link";
import { ParagraphWithLinks } from "../ParagraphWithLinks";
import { Avatar } from "../Avatar";

import PostStyle from "./Post.module.css";

interface PostComponent extends ClassNameProps {
	readonly id: number;
	readonly authorId: number;
	readonly authorName: string;
	readonly authorPhoto: string;
	readonly content: string;
	readonly Header: ReactNode;
}

export const Post: FC<PostComponent> = ({
	authorName,
	authorPhoto,
	content,
	authorId,
	Header,
	className,
}) => {
	const link = `/profile/${authorId}`;

	return (
		<BlockWrapper className={classNames(PostStyle.card, className)}>
			<Link className={PostStyle.photoLink} to={link} type="react">
				<Avatar src={authorPhoto} alt={authorName} size="large" />
			</Link>
			{Header}
			<ParagraphWithLinks className={PostStyle.content}>
				{content}
			</ParagraphWithLinks>
		</BlockWrapper>
	);
};
