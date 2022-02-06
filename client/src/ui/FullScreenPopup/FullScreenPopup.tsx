import React, { FC, MouseEvent } from "react";
import { CrossButton } from "../CrossButton";
import { Portal } from "../Portal";

import FullScreenPopupStyle from "./FullScreenPopup.module.css";

interface FullScreenPopupComponent {
	readonly isOpen: boolean;
	readonly onClose: (evt?: MouseEvent) => unknown;
}

export const FullScreenPopup: FC<FullScreenPopupComponent> = ({
	isOpen,
	onClose,
	children,
}) => {
	return isOpen ? (
		<Portal>
			<div className={FullScreenPopupStyle.dialog} role="dialog">
				<CrossButton className={FullScreenPopupStyle.cross} onClick={onClose} />
				<div className={FullScreenPopupStyle.content}>{children}</div>
			</div>
		</Portal>
	) : null;
};
