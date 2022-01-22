import React, { FC } from "react";
import { ClassNameComponent } from "../../interfaces/common";

export const SectionHeader: FC<ClassNameComponent> = ({
	children,
	className,
}) => {
	return <h2 className={className}>{children}</h2>;
};
