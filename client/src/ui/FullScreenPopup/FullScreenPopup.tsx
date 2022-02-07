import classNames from "classnames";
import React, { FC, MouseEvent } from "react";
import { ClassNameComponent } from "../../interfaces/common";
import { ContentWrapper } from "../ContentWrapper/ContentWrapper";
import { CrossButton } from "../CrossButton";
import { Portal } from "../Portal";
import { SectionHeader } from "../SectionHeader";

import FullScreenPopupStyle from "./FullScreenPopup.module.css";

interface FullScreenPopupComponent extends ClassNameComponent {
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
					<CrossButton
						className={FullScreenPopupStyle.button}
						onClick={onClose}
					/>
					<ContentWrapper>
						{label && (
							<SectionHeader className={FullScreenPopupStyle.header}>
								{label}
							</SectionHeader>
						)}
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
