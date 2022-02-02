export type SimpleFunction<R> = () => R;

export interface ClassNameComponent {
	readonly className?: string;
}

export type SubmitHandler<Request, Response = void> = (
	values: Request
) => Response | Promise<Response>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyObject = MappedObject<any>;
export type MappedObject<T> = {
	[key: string]: T;
};
