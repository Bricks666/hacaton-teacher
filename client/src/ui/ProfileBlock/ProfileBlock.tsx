import classNames from "classnames";
import React, { FC } from "react";
import { Path } from "react-router-dom";
import { ClassNameComponent } from "../../interfaces/common";
import { Link } from "../Link";
import { SubsectionHeader } from "../SubsectionHeader";

import ProfileBlockStyle from "./ProfileBlock.module.css";

interface ProfileBlockComponent extends ClassNameComponent {
	readonly label?: string;
	readonly to?: string | Partial<Path>;
}

export const ProfileBlock: FC<ProfileBlockComponent> = ({
	className,
	children,
	label,
	to,
}) => {
	return (
		<article className={classNames(ProfileBlockStyle.block, className)}>
			{label && (
				<SubsectionHeader className={ProfileBlockStyle.header}>
					{to ? (
						<Link className={ProfileBlockStyle.link} to={to} type="react">
							{label}
						</Link>
					) : (
						label
					)}
				</SubsectionHeader>
			)}
			<div className={ProfileBlockStyle.content}>{children}</div>
		</article>
	);
};
