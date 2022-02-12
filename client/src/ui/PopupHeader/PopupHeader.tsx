import classNames from "classnames";
import React, { FC, MouseEventHandler } from "react";
import { ClassNameProps } from "../../interfaces/common";
import { CrossIcon } from "../CrossIcon";
import { IconButton } from "../IconButton";
import { SectionHeader } from "../SectionHeader";

import PopupHeaderStyle from "./PopupHeader.module.css";

interface PopupHeaderComponent extends ClassNameProps {
	readonly header?: string;
	readonly onClose?: MouseEventHandler;
}

export const PopupHeader: FC<PopupHeaderComponent> = ({
	header,
	onClose,
	className,
}) => {
	return (
		<header className={classNames(PopupHeaderStyle.header, className)}>
			{header && <SectionHeader align="center" label={header} />}
			<IconButton className={PopupHeaderStyle.button} onClick={onClose}>
				<CrossIcon />
			</IconButton>
		</header>
	);
};
