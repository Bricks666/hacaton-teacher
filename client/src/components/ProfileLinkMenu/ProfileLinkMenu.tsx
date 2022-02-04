import React, { FC, useCallback } from "react";
import classNames from "classnames";
import { ClassNameComponent } from "../../interfaces/common";
import { logoutFx } from "../../models/User";
import { BlockWrapper } from "../../ui/BlockWrapper";
import { Link } from "../../ui/Link";

import ProfileLinkMenuStyle from "./ProfileLinkMenu.module.css";

export const ProfileLinkMenu: FC<ClassNameComponent> = ({ className }) => {
	const onLogout = useCallback(() => logoutFx(), []);

	return (
		<BlockWrapper>
			<ul className={classNames(ProfileLinkMenuStyle.list, className)}>
				<li>
					<Link
						className={classNames(ProfileLinkMenuStyle.item)}
						to="/profile"
						type="react"
					>
						Profile
					</Link>
				</li>
				<li>
					<button
						className={classNames(
							ProfileLinkMenuStyle.item,
							ProfileLinkMenuStyle.item__button
						)}
						onClick={onLogout}
					>
						Logout
					</button>
				</li>
			</ul>
		</BlockWrapper>
	);
};
