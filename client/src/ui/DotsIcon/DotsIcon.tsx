import React, { FC } from "react";
import { ClassNameProps } from "../../interfaces/common";
import { SvgIcon } from "../SvgIcon";

import DotsIconStyle from "./DotsIcon.module.css";

export const DotsIcon: FC<ClassNameProps> = ({ className }) => {
	return (
		<SvgIcon className={className} viewBox="0 0 25 5">
			<path
				className={DotsIconStyle.icon}
				d="M15 2.582a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0zm-10 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0zm19.999 0a2.5 2.5 0 1 0-4.997 0 2.5 2.5 0 0 0 4.997 0z"
				fill="#000"
			/>
		</SvgIcon>
	);
};
