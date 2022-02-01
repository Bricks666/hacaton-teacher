import { useCallback, useEffect, MouseEvent } from "react";

export const useClickOutside = (
	reference: HTMLElement | null,
	onClickOutside: (evt?: MouseEvent) => unknown
) => {
	const onClick = useCallback(
		(evt: globalThis.MouseEvent) => {
			const target = evt.target as HTMLElement;

			if (
				target !== reference &&
				!reference?.innerHTML.includes(target.innerHTML)
			) {
				onClickOutside(evt as unknown as MouseEvent);
			}
		},
		[onClickOutside, reference]
	);
	useEffect(() => {
		document.addEventListener("click", onClick);

		return () => {
			document.removeEventListener("click", onClick);
		};
	}, [onClick]);
};
