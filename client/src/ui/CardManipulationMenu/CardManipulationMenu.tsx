import React, { FC, MouseEvent, useMemo } from "react";
import { ClassNameComponent } from "../../interfaces/common";
import { Button } from "../Button";
import { List } from "../List";
import { Popover } from "../Popover";

interface Manipulation {
	readonly label: string;
	readonly type: ButtonProps["buttonType"];
	readonly to?: ButtonProps["to"];
	readonly onCLick?: ButtonProps["onClick"];
}

type ButtonProps = Parameters<typeof Button>[0];

interface CardManipulationMenuComponent extends ClassNameComponent {
	readonly manipulations: Manipulation[];
	readonly reference: HTMLElement | null;
	readonly onClose: (evt?: MouseEvent) => unknown;
}
export const CardManipulationMenu: FC<CardManipulationMenuComponent> = ({
	className,
	reference,
	onClose,
	manipulations,
}) => {
	const buttons = useMemo<ButtonProps[]>(() => {
		return manipulations.map<ButtonProps>((manipulation, index) => ({
			to: manipulation.to,
			type: "listed",
			color: "monotype",
			onClick: manipulation.onCLick,
			children: manipulation.label,
			buttonType: manipulation.type,
			className: `${index}`,
		}));
	}, [manipulations]);

	return (
		<Popover reference={reference} onClose={onClose}>
			<List
				className={className}
				items={buttons}
				Card={Button}
				indexedBy="className"
				type="unnumbered"
			/>
		</Popover>
	);
};
