import classNames from "classnames";
import React, { FC } from "react";
import { ClassNameComponent } from "../../interfaces/common";
import { Link } from "../Link";
import { ParagraphWithLinks } from "../ParagraphWithLinks";
import { Picture } from "../Picture";

import PostCardStyle from "./PostCard.module.css";

interface PostCardComponent extends ClassNameComponent {
	readonly id: number;
	readonly authorId: number;
	readonly authorName: string;
	readonly authorPhoto: string;
	readonly content: string;
}

export const PostCard: FC<PostCardComponent> = ({
	authorName,
	authorPhoto,
	content,
	authorId,
	className,
}) => {
	const link = `/profile/${authorId}`;
	return (
		<article className={classNames(PostCardStyle.card, className)}>
			<Link className={PostCardStyle.photoLink} to={link} type="react">
				<Picture
					className={PostCardStyle.photo}
					src={authorPhoto}
					alt={authorName}
				/>
			</Link>

			<p className={PostCardStyle.name}>
				<Link className={PostCardStyle.nameLink} to={link} type="react">
					{authorName}
				</Link>
			</p>
			<ParagraphWithLinks className={PostCardStyle.content}>
				{content}
			</ParagraphWithLinks>
		</article>
	);
};
