import { createDomain } from "effector-logger";

export interface Performance {
	readonly id: number;
	readonly header: string;
	readonly photo: string;
	readonly description: string;
}

export const Performances = createDomain("PerformancesDomain");

export const $UserPerformances = Performances.createStore<Performance[]>([], {
	name: "UserPerformances",
});

export const loadUserPerformancesFx = Performances.createEffect<
	void,
	Performance[]
>("loadUserPerformancesFx");

export const $LoadingUserPerformances = Performances.createStore<boolean>(
	false,
	{ name: "LoadingUserPerformances" }
);
