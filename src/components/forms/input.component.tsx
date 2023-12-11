import * as React from "react";

import {
	Input as RootInput,
	type InputProps as RootInputProps,
} from "@components/ui/";

import {
	useControlledFormFieldProps,
	FormFieldProps,
} from "./use-controlled-form-field-props.hook";

type Props = RootInputProps & FormFieldProps;

const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
	const { formFieldProps, childProps } = useControlledFormFieldProps(props);

	return <RootInput {...formFieldProps} {...childProps} ref={ref} />;
});

export default Input;
