import * as React from 'react';
import { TextInputProps } from 'react-native/types';
import {
  InputWrapper, Input
} from './input-style';
import { Label } from '..';

interface InputProps extends TextInputProps {
  id?: string
  label?: string,
  isLoading?: boolean
  isSuccess?: boolean
  type?: 'text' | 'number'
}

const InputElement: React.FC<InputProps> = ({
  id,
  label,
  type,
  isLoading = false,
  isSuccess = false,
  onChange,
  ...props
}) => {
  if (label) {
    return (
      <InputWrapper>
        <Label>{label}</Label>
        <Input 
          id={id} 
          onChangeText={onChange}
          isLoading={isLoading}
          {...props} 
        />
      </InputWrapper>
    );
  }

  return (
    <Input
      keyboardType={type === 'number' ? 'numeric' : 'default'}
      onChangeText={onChange}
      isLoading={isLoading}
      {...props}
    />
  );
};

export default InputElement;
