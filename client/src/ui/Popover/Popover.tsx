import React, { CSSProperties, RefObject, useMemo, useRef } from "react";
import { ClickOutside } from "../ClickOutside";
import { Portal } from "../Portal";

type VerticalAlign = "bottom" | "center" | "top";
type HorizontalAlign = "left" | "center" | "right";

interface PopoverComponent<T extends HTMLElement> {
	readonly parent: HTMLElement | null;
	readonly open: boolean;
	readonly onClose: (evt: MouseEvent) => unknown;
	readonly element: (props: {
		readonly ref: RefObject<T>;
		readonly style: CSSProperties;
	}) => JSX.Element;

	readonly verticalAlign?: VerticalAlign;
	readonly horizontalAlign?: HorizontalAlign;
}

const alignKof: Record<VerticalAlign | HorizontalAlign, number> = {
	center: 0.5,
	bottom: 1,
	left: 0,
	right: 1,
	top: 0,
};

export const Popover = <T extends HTMLElement>({
	onClose,
	open,
	parent,
	element,
	verticalAlign = "top",
	horizontalAlign = "left",
}: PopoverComponent<T>) => {
	console.log(parent);

	const ref = useRef<T>(null);
	const positionStyle = useMemo<CSSProperties>(() => {
		const height = parent?.offsetHeight || 0;
		const width = parent?.offsetWidth || 0;
		const parentTop = parent?.offsetTop || 0;
		const parentLeft = parent?.offsetLeft || 0;

		const top = parentTop + height * alignKof[horizontalAlign];
		const left = parentLeft + width * alignKof[verticalAlign];

		return {
			position: "absolute",
			top,
			left,
		};
	}, [parent, horizontalAlign, verticalAlign]);

	return open ? (
		<Portal>
			<ClickOutside inner={ref.current} onClickOutside={onClose}>
				{element({ ref, style: positionStyle })}
			</ClickOutside>
		</Portal>
	) : null;
};
