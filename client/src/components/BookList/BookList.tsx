import classNames from "classnames";
import React, { FC } from "react";
import { useBooks, useLoadingBooks } from "../../hooks";
import { ClassNameProps } from "../../interfaces/common";
import { FriendlyList } from "../../ui/FriendlyList";
import { BookCard } from "../BookCard";

import BookListStyle from "./BookList.module.css";

export const BookList: FC<ClassNameProps> = ({ className }) => {
	const books = useBooks();
	const isLoading = useLoadingBooks();

	return (
		<FriendlyList
			className={classNames(BookListStyle.list, className)}
			itemClassName={BookListStyle.book}
			items={books}
			Card={BookCard}
			indexedBy="id"
			isLoading={isLoading}
			type="unnumbered"
			emptyLabel="Sorry, now we don't have any books"
		/>
	);
};
