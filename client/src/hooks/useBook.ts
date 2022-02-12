import { Book } from "../models/Library";
import { useBooks } from ".";

export const useBook = (id: string | number | undefined): Book | null => {
	return useBooks().find((book) => id && book.id === +id) || null;
};
