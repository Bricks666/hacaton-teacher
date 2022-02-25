import classNames from "classnames";
import React, { FC } from "react";
import { ClassNameProps } from "../../interfaces/common";

import SectionHeaderStyle from "./SectionHeader.module.css";

interface SectionHeaderComponent extends ClassNameProps {
	readonly align?: "start" | "center" | "end";
	readonly label: string;
}

export const SectionHeader: FC<SectionHeaderComponent> = ({
	className,
	label,
	align = "start",
}) => {
	const styles = { textAlign: align };
	return (
		<h2
			className={classNames(SectionHeaderStyle.sectionHeader, className)}
			style={styles}
		>
			{label}
		</h2>
	);
};
