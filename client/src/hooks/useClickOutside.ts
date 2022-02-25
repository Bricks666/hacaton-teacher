import { useCallback, useEffect, MouseEvent } from "react";

export const useClickOutside = (
	reference: HTMLElement | null,
	onClickOutside: (evt?: MouseEvent) => unknown,
	...conditions: boolean[]
) => {
	const onClick = useCallback(
		(evt: globalThis.MouseEvent) => {
			const target = evt.target as HTMLElement;

			const isClickOutside =
				target !== reference &&
				!reference?.contains(target) &&
				conditions?.every((condition) => condition);

			if (isClickOutside) {
				onClickOutside(evt as unknown as MouseEvent);
			}
		},
		[onClickOutside, reference, conditions]
	);
	useEffect(() => {
		document.addEventListener("mousedown", onClick);

		return () => {
			document.removeEventListener("mousedown", onClick);
		};
	}, [onClick]);
};
