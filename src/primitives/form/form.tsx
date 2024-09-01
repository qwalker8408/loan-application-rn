import * as React from 'react';
import { Text, View } from '..';
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from 'react-hook-form';
import { useTheme } from 'styled-components';
import { FormItemCSS } from './form-style';
import { ViewProps } from 'react-native/types';

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({ ...props }: ControllerProps<TFieldValues, TName>) => (
  <FormFieldContext.Provider value={{ name: props.name }}>
    <Controller {...props} />
  </FormFieldContext.Provider>
);

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

interface FormItemProps extends ViewProps {}

const FormItem = React.forwardRef< FormItemProps>(({ ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <FormItemCSS
        ref={ref}
        {...props} />
    </FormItemContext.Provider>
  );
});

const getFriendlyName = (labelName: string) => {
  const words = labelName.split(/[_-]|(?=[A-Z])/); // Split by underscore, hyphen, or before uppercase letters
  const firstWord = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  const result = [firstWord, ...words.slice(1)].join(' ');
  return result;
};

const FormLabel = ({ children, ...props }: { children: React.ReactNode }) => {
  const { formItemId } = useFormField();

  return (
    <Text
      id={formItemId}
      {...props}
    >
      {typeof children === 'string' ? getFriendlyName(children) : children}
    </Text>
  );
};

const FormControl = ({ ...props }) => {
  const {
    error, 
    formItemId,
  } = useFormField();
  
  console.log({ error })
  return (
    <View
      id={formItemId}
      {...props}
    />
  );
};

const FormDescription: React.FC = ({ children, ...props }: {children?: React.ReactNode}) => {
  const { formDescriptionId } = useFormField();

  return (
    <Text
      id={formDescriptionId}
      {...props}
    >
      {children}
    </Text>
  );
};

const FormMessage = ({ children, ...props }: {children?: React.ReactNode}) => {
  const theme = useTheme();
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <Text
      id={formMessageId}
      style={{
        color: error ? theme.dangerForeground : theme.foreground,
        marginTop: error ? -16 : 0,
        fontSize: '8px',
      }}
      {...props}
    >
      {body}
    </Text>
  );
};

export {
  FormProvider,
  useFormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
