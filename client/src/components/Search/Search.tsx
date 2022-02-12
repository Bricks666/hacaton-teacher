import React, { FC, useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { ClassNameProps } from "../../interfaces/common";
import { useClickOutside } from "../../hooks";
import { IconButton } from "../../ui/IconButton";
import { SearchIcon } from "../../ui/SearchIcon";

import SearchStyle from "./Search.module.css";

interface SearchRequest {
	readonly searched: string;
}

const initialValues: SearchRequest = {
	searched: "",
};

interface SearchComponent extends ClassNameProps {
	readonly onSearch: (values: SearchRequest) => unknown;
	readonly onShowChange: (isShow: boolean) => void;
	readonly isShow: boolean;
}

export const Search: FC<SearchComponent> = ({
	className,
	onSearch,
	onShowChange,
	isShow,
}) => {
	const [formRef, setFormRef] = useState<HTMLFormElement | null>(null);

	const { register, reset, handleSubmit, setFocus } = useForm<SearchRequest>({
		defaultValues: initialValues,
	});

	useEffect(() => {
		if (isShow) {
			setFocus("searched");
		}
	}, [isShow, setFocus]);

	useEffect(() => {
		return () => {
			onShowChange(false);
		};
	}, [onShowChange]);

	const onSubmit = useCallback(
		async (values: SearchRequest) => {
			await onSearch(values);
			reset();
		},
		[reset, onSearch]
	);

	const showSearch = useCallback(() => {
		onShowChange(true);
	}, [onShowChange]);

	const hiddenSearch = useCallback(() => {
		onShowChange(false);
	}, [onShowChange]);
	const onClick = handleSubmit(isShow ? onSubmit : showSearch);

	useClickOutside(formRef, hiddenSearch, isShow);
	return (
		<form className={classNames(SearchStyle.form, className)} ref={setFormRef}>
			<input
				className={classNames(SearchStyle.search, {
					[SearchStyle.search__show]: isShow,
				})}
				{...register("searched")}
				type="search"
				placeholder="Search"
			/>
			<IconButton
				className={classNames(SearchStyle.button, {
					[SearchStyle.button__show]: isShow,
				})}
				onClick={onClick}
				color="third"
			>
				<SearchIcon />
			</IconButton>
		</form>
	);
};
