import React, { FC } from "react";
import { ClassNameProps } from "../../interfaces/common";
import { SvgIcon } from "../SvgIcon";

export const ArrowIcon: FC<ClassNameProps> = ({ className }) => {
	return (
		<SvgIcon className={className} viewBox="0 0 25 25">
			<path
				d="M3.594 11.5h15.812M12.938 5.031l6.468 6.469-6.468 6.469"
				stroke="#fff"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</SvgIcon>
	);
};
