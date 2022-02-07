import classNames from "classnames";
import React, { FC, ReactNode } from "react";
import { ClassNameComponent } from "../../interfaces/common";
import { BlockWrapper } from "../BlockWrapper";
import { Link } from "../Link";
import { ParagraphWithLinks } from "../ParagraphWithLinks";
import { Picture } from "../Picture";

import PostStyle from "./Post.module.css";

interface PostComponent extends ClassNameComponent {
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
				<Picture
					className={PostStyle.photo}
					src={authorPhoto}
					alt={authorName}
				/>
			</Link>
			{Header}
			<ParagraphWithLinks className={PostStyle.content}>
				{content}
			</ParagraphWithLinks>
		</BlockWrapper>
	);
};
