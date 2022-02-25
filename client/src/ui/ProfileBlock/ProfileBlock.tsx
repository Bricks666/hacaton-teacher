import classNames from "classnames";
import React, { FC } from "react";
import { Path } from "react-router-dom";
import { ClassNameProps } from "../../interfaces/common";
import { Link } from "../Link";
import { SubsectionHeader } from "../SubsectionHeader";

import ProfileBlockStyle from "./ProfileBlock.module.css";

interface ProfileBlockComponent extends ClassNameProps {
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
				<SubsectionHeader
					className={ProfileBlockStyle.header}
					label={
						to ? (
							<Link className={ProfileBlockStyle.link} to={to} type="react">
								{label}
							</Link>
						) : (
							label
						)
					}
				/>
			)}
			<div className={ProfileBlockStyle.content}>{children}</div>
		</article>
	);
};
