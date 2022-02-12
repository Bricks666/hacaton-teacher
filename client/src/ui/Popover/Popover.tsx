import React, { FC, useState, MouseEvent, CSSProperties } from "react";
import { Modifier, usePopper } from "react-popper";
import { Placement } from "@popperjs/core";
import classNames from "classnames";
import { ClassNameProps } from "../../interfaces/common";
import { Portal } from "../Portal";
import { useClickOutside } from "../../hooks";

import PopoverStyle from "./Popover.module.css";

interface PopoverComponent extends ClassNameProps {
	readonly reference: HTMLElement | null;
	readonly isOpen: boolean;
	readonly onClose: (evt?: MouseEvent) => unknown;
	readonly placement?: Placement;
	readonly style?: CSSProperties;
	readonly modifiers?: Modifier<unknown>[];
}

export const Popover: FC<PopoverComponent> = ({
	className,
	onClose,
	isOpen,
	reference,
	placement,
	children,
	modifiers,
	style = {},
}) => {
	const [popoverRef, setPopoverRef] = useState<HTMLElement | null>(null);
	const { styles, attributes } = usePopper(reference, popoverRef, {
		placement,
		modifiers: modifiers,
	});
	useClickOutside(popoverRef, onClose, isOpen);

	return isOpen ? (
		<Portal>
			<div
				className={classNames(PopoverStyle.popover, className)}
				style={{ ...style, ...styles.popper }}
				{...attributes.popper}
				ref={setPopoverRef}
			>
				{children}
			</div>
		</Portal>
	) : null;
};
