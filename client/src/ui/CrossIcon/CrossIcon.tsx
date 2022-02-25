import React, { FC } from "react";
import { ClassNameProps } from "../../interfaces/common";
import { SvgIcon } from "../SvgIcon";

import CrossIconStyle from "./CrossIcon.module.css";

export const CrossIcon: FC<ClassNameProps> = ({ className }) => {
	return (
		<SvgIcon className={className}>
			<path
				className={CrossIconStyle.cross}
				d="M23.44 1.56 1.56 23.44m0-21.88 21.88 21.88"
			/>
		</SvgIcon>
	);
};
