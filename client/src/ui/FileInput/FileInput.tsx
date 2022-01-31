import React, {
	forwardRef,
	InputHTMLAttributes,
	PropsWithChildren,
} from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { ClassNameComponent } from "../../interfaces/common";

interface FileInputComponent extends ClassNameComponent, UseFormRegisterReturn {
	readonly accept?: InputHTMLAttributes<HTMLInputElement>["accept"];
}

export const FileInput = forwardRef<
	HTMLInputElement,
	PropsWithChildren<FileInputComponent>
>(({ children, ...input }, ref) => {
	return (
		<label>
			{children}
			<input className="visibility-hidden" {...input} type="file" ref={ref} />
		</label>
	);
});
