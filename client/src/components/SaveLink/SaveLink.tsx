import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import { useLocationState } from "../../hooks";
import { ClassNameComponent } from "../../interfaces/common";
import { Link } from "../../ui/Link";

interface SaveLinkComponent extends ClassNameComponent {
	readonly to: string;
}

export const SaveLink: FC<SaveLinkComponent> = ({
	className,
	to,
	children,
}) => {
	const state = useLocationState();
	const location = useLocation();

	return (
		<Link className={className} to={to} state={state || location} type="react">
			{children}
		</Link>
	);
};
