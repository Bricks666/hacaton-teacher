import React, { FC, useCallback, useState } from "react";
import { CardManipulationMenu } from "../../ui/CardManipulationMenu";
import { CardHeader } from "../../ui/CardHeader";
import { Manipulation } from "../../interfaces/common";
import { IconButton } from "../../ui/IconButton";
import { DotsIcon } from "../../ui/DotsIcon";

import CardHeaderWithEditingStyle from "./CardHeaderWithEditing.module.css";

type CardHeaderWithEditingComponent = Parameters<typeof CardHeader>[0] & {
	readonly manipulations: Manipulation[];
};

export const CardHeaderWithEditing: FC<CardHeaderWithEditingComponent> = ({
	manipulations,
	...props
}) => {
	const [parentRef, setParentRef] = useState<HTMLElement | null>(null);
	const [showPopover, setShowPopover] = useState(false);

	const onToggleShowPopover = useCallback(
		() => setShowPopover(!showPopover),
		[showPopover]
	);

	return (
		<CardHeader className={CardHeaderWithEditingStyle.header} {...props}>
			<div className={CardHeaderWithEditingStyle.button} ref={setParentRef}>
				<IconButton type="rectangle" onClick={onToggleShowPopover}>
					<DotsIcon />
				</IconButton>
			</div>

			<CardManipulationMenu
				reference={parentRef}
				isOpen={showPopover}
				onClose={onToggleShowPopover}
				manipulations={manipulations}
			/>
		</CardHeader>
	);
};
