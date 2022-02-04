import classNames from "classnames";
import React, { FC, MouseEventHandler } from "react";
import { ClassNameComponent } from "../../interfaces/common";
import { CrossButton } from "../CrossButton";
import { Overlay } from "../Overlay";
import { SubsectionHeader } from "../SubsectionHeader";

import MainPopupStyle from "./MainPopup.module.css";

interface MainPopupComponent extends ClassNameComponent {
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
					<SubsectionHeader className={MainPopupStyle.header}>
						{title}
					</SubsectionHeader>
					<CrossButton className={MainPopupStyle.cross} onClick={onClose} />
				</div>
				<div className={contentClassName}>{children}</div>
			</div>
		</Overlay>
	);
};
