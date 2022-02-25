import { forward, guard, sample } from "effector";
import { $Books, $LoadingBooks, loadBooks, loadBooksFx } from ".";
import { getBooks } from "../../api";

loadBooksFx.use(getBooks);

forward({
	from: loadBooksFx.pending,
	to: $LoadingBooks,
});

guard({
	clock: loadBooks,
	filter: sample({
		source: loadBooksFx.pending,
		fn: (isLoading) => !isLoading,
	}),
	target: loadBooksFx,
});

forward({
	from: loadBooksFx.doneData,
	to: $Books,
});
