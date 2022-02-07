/* eslint-disable @typescript-eslint/no-explicit-any */

import { MouseEventHandler } from "react";
import { Path } from "react-router-dom";

export type SimpleFunction<R> = () => R;

export interface ClassNameComponent {
	readonly className?: string;
}

export type SubmitHandler<Request, Response = void> = (
	values: Request
) => Response | Promise<Response>;

export type AnyObject = MappedObject<any>;
export type MappedObject<T> = {
	[key: string]: T;
};

export type ExtractProps<
	T extends (...props: any[]) => any,
	K extends keyof Parameters<T>[0] = never
> = Omit<Parameters<T>[0], K>;

export interface Manipulation {
	readonly label: string;
	readonly type: "button" | "link";
	readonly to?: string | Partial<Path>;
	readonly onCLick?: MouseEventHandler;
}
