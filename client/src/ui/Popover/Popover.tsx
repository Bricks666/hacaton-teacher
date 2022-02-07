import React, { FC, useState, MouseEvent } from "react";
import { usePopper } from "react-popper";
import { Placement } from "@popperjs/core";
import { ClassNameComponent } from "../../interfaces/common";
import { Portal } from "../Portal";
import { useClickOutside } from "../../hooks";

import PopoverStyle from "./Popover.module.css";
import classNames from "classnames";

interface PopoverComponent extends ClassNameComponent {
	readonly reference: HTMLElement | null;
	readonly onClose: (evt?: MouseEvent) => unknown;
	readonly placement?: Placement;
}

export const Popover: FC<PopoverComponent> = ({
	className,
	onClose,
	reference,
	placement,
	children,
}) => {
	const [popoverRef, setPopoverRef] = useState<HTMLElement | null>(null);
	const { styles, attributes } = usePopper(reference, popoverRef, {
		placement,
	});
	useClickOutside(popoverRef, onClose);

	return (
		<Portal>
			<div
				className={classNames(PopoverStyle.popover, className)}
				style={styles.popper}
				{...attributes.popper}
				ref={setPopoverRef}
			>
				{children}
			</div>
		</Portal>
	);
};
