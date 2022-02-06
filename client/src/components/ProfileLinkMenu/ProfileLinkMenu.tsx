import React, { FC, useCallback } from "react";
import classNames from "classnames";
import { ClassNameComponent } from "../../interfaces/common";
import { logoutFx } from "../../models/User";
import { BlockWrapper } from "../../ui/BlockWrapper";
import { Button } from "../../ui/Button";

import ProfileLinkMenuStyle from "./ProfileLinkMenu.module.css";
import { useUserInfo } from "../../hooks";

export const ProfileLinkMenu: FC<ClassNameComponent> = ({ className }) => {
	const onLogout = useCallback(() => logoutFx(), []);
	const { id } = useUserInfo();

	return (
		<BlockWrapper>
			<ul className={classNames(ProfileLinkMenuStyle.list, className)}>
				<li>
					<Button
						className={classNames(ProfileLinkMenuStyle.item)}
						to={`/profile/${id}`}
						buttonType="link"
						type="listed"
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
						type="listed"
						color="monotype"
					>
						Logout
					</Button>
				</li>
			</ul>
		</BlockWrapper>
	);
};
