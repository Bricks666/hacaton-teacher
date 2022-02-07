import React, { FC, useCallback, useState } from "react";
import { CardManipulationMenu } from "../../ui/CardManipulationMenu";
import { CardHeader } from "../../ui/CardHeader";
import { Manipulation } from "../../interfaces/common";

import CardHeaderWithEditingStyle from "./CardHeaderWithEditing.module.css";

type CardHeaderWithEditingComponent = Parameters<typeof CardHeader>[0] & {
	readonly manipulations: Manipulation[];
};

export const CardHeaderWithEditing: FC<CardHeaderWithEditingComponent> = ({
	manipulations,
	...props
}) => {
	const [parentRef, setParentRef] = useState<HTMLButtonElement | null>(null);
	const [showPopover, setShowPopover] = useState(false);

	const onToggleShowPopover = useCallback(
		() => setShowPopover(!showPopover),
		[showPopover]
	);

	return (
		<CardHeader className={CardHeaderWithEditingStyle.header} {...props}>
			<button
				className={CardHeaderWithEditingStyle.button}
				onClick={onToggleShowPopover}
				ref={setParentRef}
			/>
			{showPopover && (
				<CardManipulationMenu
					reference={parentRef}
					onClose={onToggleShowPopover}
					manipulations={manipulations}
				/>
			)}
		</CardHeader>
	);
};
