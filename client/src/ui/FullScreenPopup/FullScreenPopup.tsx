import classNames from "classnames";
import React, { FC, MouseEvent } from "react";
import { ClassNameComponent } from "../../interfaces/common";
import { ContentWrapper } from "../ContentWrapper/ContentWrapper";
import { CrossButton } from "../CrossButton";
import { Portal } from "../Portal";

import FullScreenPopupStyle from "./FullScreenPopup.module.css";

interface FullScreenPopupComponent extends ClassNameComponent {
	readonly isOpen: boolean;
	readonly onClose: (evt?: MouseEvent) => unknown;
}

export const FullScreenPopup: FC<FullScreenPopupComponent> = ({
	isOpen,
	onClose,
	className,
	children,
}) => {
	return isOpen ? (
		<Portal>
			<div className={FullScreenPopupStyle.dialog} role="dialog">
				<div className={FullScreenPopupStyle.inner}>
					<CrossButton
						className={FullScreenPopupStyle.button}
						onClick={onClose}
					/>
					<ContentWrapper>
						<div
							className={classNames(FullScreenPopupStyle.content, className)}
						>
							{children}
						</div>
					</ContentWrapper>
				</div>
			</div>
		</Portal>
	) : null;
};
