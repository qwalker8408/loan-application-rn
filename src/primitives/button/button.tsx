import * as React from 'react';
import { ActivityIndicator, PressableProps } from 'react-native';
import { BaseButton, Secondary, ButtonText } from './button-style';
import type { statusTypes } from '../../index.d';
import { useTheme } from 'styled-components';

// TODO would probably add a size prop to this
export interface ButtonProps extends PressableProps {
  status?: statusTypes;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'link';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  status,
  children,
  loading,
  disabled = false,
  ...props
}) => {
  
  const {primaryForeground, secondaryForeground, mutedForeground} = useTheme();

  if (variant === 'secondary') {
    <Secondary
    status={status}
    disabled={disabled}
    {...props}
    >
      <ButtonText style={{
        fontWeight: 'bold',
        color: secondaryForeground
        }}>
          {loading ? <ActivityIndicator /> : children}
          </ButtonText>
    </Secondary>
  }

  return (
    <BaseButton
      variant={variant}
      status={status}
      disabled={disabled}
      {...props}
    >
      <ButtonText style={{
        fontWeight: 'bold',
        color: disabled ? mutedForeground: primaryForeground
        }}>
          {loading ? <ActivityIndicator /> : children}
        </ButtonText>
    </BaseButton>
  );
}
  ;
Button.displayName = 'Button';

export default Button;
