import { createDomain } from "effector-logger";

export interface Book {
	readonly id: number;
	readonly name: string;
	readonly photo?: string;
	readonly authorName: string;
	readonly link: string;
	readonly description: string;
}

export const Library = createDomain("LibraryDomain");

export const $Books = Library.createStore<Book[]>([], { name: "Books" });
export const $LoadingBooks = Library.createStore<boolean>(false, {
	name: "LoadingBooks",
});

export const loadBooksFx = Library.createEffect<void, Book[]>("loadBooksFx");

export const loadBooks = Library.createEvent<void>("loadBooksEvent");
