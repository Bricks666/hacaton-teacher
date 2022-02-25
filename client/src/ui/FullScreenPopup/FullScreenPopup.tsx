import classNames from "classnames";
import React, { FC, MouseEvent } from "react";
import { ClassNameProps } from "../../interfaces/common";
import { ContentWrapper } from "../ContentWrapper/ContentWrapper";
import { PopupHeader } from "../PopupHeader";
import { Portal } from "../Portal";

import FullScreenPopupStyle from "./FullScreenPopup.module.css";

interface FullScreenPopupComponent extends ClassNameProps {
	readonly isOpen: boolean;
	readonly onClose: (evt?: MouseEvent) => unknown;
	readonly label?: string;
}

export const FullScreenPopup: FC<FullScreenPopupComponent> = ({
	isOpen,
	onClose,
	className,
	label,
	children,
}) => {
	return isOpen ? (
		<Portal>
			<div className={FullScreenPopupStyle.dialog} role="dialog">
				<div className={FullScreenPopupStyle.inner}>
					<PopupHeader header={label} onClose={onClose} />
					<ContentWrapper
						className={classNames(FullScreenPopupStyle.content, className)}
					>
						{children}
					</ContentWrapper>
				</div>
			</div>
		</Portal>
	) : null;
};
