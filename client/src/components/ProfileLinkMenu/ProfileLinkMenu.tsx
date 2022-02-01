import React, { FC, useCallback } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { ClassNameComponent } from "../../interfaces/common";
import { logoutFx } from "../../models/User";

import ProfileLinkMenuStyle from "./ProfileLinkMenu.module.css";

export const ProfileLinkMenu: FC<ClassNameComponent> = ({ className }) => {
	const onLogout = useCallback(() => logoutFx(), []);
	return (
		<ul className={classNames(ProfileLinkMenuStyle.list, className)}>
			<li>
				<Link
					className={classNames(
						ProfileLinkMenuStyle.item,
						ProfileLinkMenuStyle.item__link
					)}
					to="/profile"
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
	);
};
