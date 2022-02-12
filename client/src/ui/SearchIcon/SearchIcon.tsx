import React, { FC } from "react";
import { ClassNameProps } from "../../interfaces/common";
import { SvgIcon } from "../SvgIcon";

import SearchIconStyle from "./SearchIcon.module.css";

export const SearchIcon: FC<ClassNameProps> = ({ className }) => {
	return (
		<SvgIcon className={className}>
			<g className={SearchIconStyle.icon}>
				<circle cx="5.469" cy="5.469" r="4.969" />
				<path d="m8.624 9.573 3.797 5.907" />
			</g>
		</SvgIcon>
	);
};
