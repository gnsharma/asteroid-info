import { useFormContext, useController } from "react-hook-form";

export interface FormFieldProps {
  name: string;
  label: string;
}

export const useControlledFormFieldProps = <P extends FormFieldProps>(
  props: P
) => {
  const { label, name, ...otherProps } = props;
  const id = name;

  const ctx = useFormContext();
  const state = ctx.getFieldState(name);
  const { field } = useController({ name });

  return {
    formFieldProps: {
      ...field,
      label,
      error: !!state.error,
      helperText: state.error ? state.error.message : null,
    },
    childProps: { ...otherProps, id: name, name },
  };
};
