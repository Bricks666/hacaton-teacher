import classNames from "classnames";
import React, { FC, MouseEventHandler } from "react";
import { ClassNameProps } from "../../interfaces/common";
import { Overlay } from "../Overlay";
import { PopupHeader } from "../PopupHeader";

import MainPopupStyle from "./MainPopup.module.css";

interface MainPopupComponent extends ClassNameProps {
	readonly isOpen: boolean;
	readonly onClose: MouseEventHandler<HTMLElement>;
	readonly title: string;
	readonly contentClassName?: string;
}

export const MainPopup: FC<MainPopupComponent> = ({
	className,
	isOpen,
	onClose,
	title,
	children,
	contentClassName,
}) => {
	return (
		<Overlay isOpen={isOpen} onClose={onClose}>
			<div className={classNames(MainPopupStyle.popup, className)}>
				<div className={MainPopupStyle.head}>
					<PopupHeader header={title} onClose={onClose} />
				</div>
				<div className={contentClassName}>{children}</div>
			</div>
		</Overlay>
	);
};
