import React, { FC } from "react";
import { useGoBack } from "../../hooks";
import { ClassNameProps } from "../../interfaces/common";
import { MainPopup } from "../../ui/MainPopup";
import { PerformanceForm } from "../PerformanceForm";

interface ChangePerformanceComponent extends ClassNameProps {
	readonly isOpen: boolean;
}

export const ChangePerformance: FC<ChangePerformanceComponent> = ({
	className,
	isOpen,
}) => {
	const onClose = useGoBack();

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
