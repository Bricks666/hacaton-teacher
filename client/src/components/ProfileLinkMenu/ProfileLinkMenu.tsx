import React, { FC, useCallback } from "react";
import classNames from "classnames";
import { ClassNameProps } from "../../interfaces/common";
import { logout } from "../../models/Auth";
import { BlockWrapper } from "../../ui/BlockWrapper";
import { Button } from "../../ui/Button";
import { useAuthInfo } from "../../hooks";

import ProfileLinkMenuStyle from "./ProfileLinkMenu.module.css";

export const ProfileLinkMenu: FC<ClassNameProps> = ({ className }) => {
	const onLogout = useCallback(() => logout(), []);
	const { id } = useAuthInfo();

	return (
		<BlockWrapper>
			<ul className={classNames(ProfileLinkMenuStyle.list, className)}>
				<li>
					<Button
						className={classNames(ProfileLinkMenuStyle.item)}
						to={`/profile/${id}`}
						type="text"
						color="monotype"
					>
						Profile
					</Button>
				</li>
				<li>
					<Button
						className={classNames(
							ProfileLinkMenuStyle.item,
							ProfileLinkMenuStyle.item__button
						)}
						onClick={onLogout}
						type="text"
						color="monotype"
					>
						Logout
					</Button>
				</li>
			</ul>
		</BlockWrapper>
	);
};
