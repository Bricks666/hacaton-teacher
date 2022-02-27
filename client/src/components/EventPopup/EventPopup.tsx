import React, { FC } from "react";
import { useGoBack } from "../../hooks";
import { ClassNameProps } from "../../interfaces/common";
import { Overlay } from "../../ui/Overlay";
import { EventPopupInfo } from "../EventPopupInfo";

interface EventPopupProps extends ClassNameProps {
	readonly isOpen: boolean;
}

export const EventPopup: FC<EventPopupProps> = ({ isOpen, className }) => {
	const onClose = useGoBack();
	return (
		<Overlay onClose={onClose} isOpen={isOpen}>
			<EventPopupInfo />
		</Overlay>
	);
};
