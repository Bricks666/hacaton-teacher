/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, MouseEventHandler } from "react";
import { Portal } from "../Portal";

import OverlayStyle from "./Overlay.module.css";

interface OverlayComponent {
	readonly isOpen: boolean;
	readonly onClose: MouseEventHandler<HTMLDivElement>;
}

export const Overlay: FC<OverlayComponent> = ({
	children,
	isOpen,
	onClose,
}) => {
	return isOpen ? (
		<Portal>
			<div className={OverlayStyle.dialog} role="dialog">
				<div
					className={OverlayStyle.overlay}
					role="button"
					tabIndex={0}
					onClick={onClose}
				/>
				{children}
			</div>
		</Portal>
	) : null;
};
