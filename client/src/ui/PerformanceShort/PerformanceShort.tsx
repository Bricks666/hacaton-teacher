import React, { FC } from "react";
import { ClassNameComponent } from "../../interfaces/common";
import { Picture } from "../Picture";

interface PerformanceComponent extends ClassNameComponent {
	readonly photo: string;
	readonly header: string;
}

export const PerformanceShort: FC<PerformanceComponent> = ({
	className,
	photo,
	header,
}) => {
	return <Picture className={className} src={photo} alt={header} />;
};
