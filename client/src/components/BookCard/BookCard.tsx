import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ClassNameProps } from "../../interfaces/common";
import { Paragraph } from "../../ui/Paragraph";
import { Picture } from "../../ui/Picture";

import BookStyle from "./BookCard.module.css";

interface BookProps extends ClassNameProps {
	readonly id: number;
	readonly name: string;
	readonly photo?: string;
	readonly authorName: string;
}

export const BookCard: FC<BookProps> = ({
	authorName,
	id,
	name,
	className,
	photo = "",
}) => {
	const bookLink = `/library/${id}`;
	return (
		<article className={className}>
			<Link className={BookStyle.link} to={bookLink}>
				<div className={BookStyle.photoContainer}>
					<Picture className={BookStyle.photo} src={photo} alt={name} />
				</div>
				<Paragraph className={BookStyle.author}>{authorName}</Paragraph>
				<Paragraph className={BookStyle.name}>{name}</Paragraph>
			</Link>
		</article>
	);
};
