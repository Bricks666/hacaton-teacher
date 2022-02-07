import React, { FC } from "react";
import { useClosePopup } from "../../hooks";
import { ClassNameComponent } from "../../interfaces/common";
import { MainPopup } from "../../ui/MainPopup";
import { PerformanceForm } from "../PerformanceForm";

interface ChangePerformanceComponent extends ClassNameComponent {
	readonly isOpen: boolean;
}

export const ChangePerformance: FC<ChangePerformanceComponent> = ({
	className,
	isOpen,
}) => {
	const onClose = useClosePopup();

	return (
		<MainPopup
			className={className}
			isOpen={isOpen}
			onClose={onClose}
			title="Performance"
		>
			<PerformanceForm />
		</MainPopup>
	);
};
