import { useEffect } from "react";
import { useStore } from "effector-react";
import { $Books, loadBooks } from "../models/Library";

export const useBooks = () => {
	const books = useStore($Books);

	useEffect(() => {
		if (!books.length) {
			loadBooks();
		}
	}, [books.length]);

	return books;
};
