import React, { FC, MouseEvent, useMemo } from "react";
import { ClassNameProps, Manipulation } from "../../interfaces/common";
import { Button } from "../Button";
import { List } from "../List";
import { Popover } from "../Popover";

type ButtonProps = Parameters<typeof Button>[0];

interface CardManipulationMenuComponent extends ClassNameProps {
	readonly manipulations: Manipulation[];
	readonly reference: HTMLElement | null;
	readonly onClose: (evt?: MouseEvent) => unknown;
	readonly isOpen: boolean;
}
export const CardManipulationMenu: FC<CardManipulationMenuComponent> = ({
	className,
	reference,
	onClose,
	isOpen,
	manipulations,
}) => {
	const buttons = useMemo<ButtonProps[]>(() => {
		return manipulations.map<ButtonProps>((manipulation, index) => ({
			to: manipulation.to,
			type: "text",
			color: "monotype",
			onClick: manipulation.onCLick,
			children: manipulation.label,
			className: `${index}`,
		}));
	}, [manipulations]);

	return (
		<Popover reference={reference} onClose={onClose} isOpen={isOpen}>
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
