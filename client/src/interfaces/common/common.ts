export type SimpleFunction<R> = () => R;

export interface ClassNameComponent {
	className?: string;
}

export type SubmitHandler<Request, Response = void> = (
	values: Request
) => Response | Promise<Response>;
