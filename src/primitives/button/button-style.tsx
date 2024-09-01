import styled from 'styled-components/native';
import type { statusTypes } from '../../index.d';

interface ButtonStyleProps {
  status?: statusTypes;
  variant?: 'primary' | 'secondary' | 'link';
}

export const BaseButton = styled.Pressable<ButtonStyleProps>`
  color: ${({ theme, status, disabled }) => {
    if (disabled) {
      return theme.mutedForeground;
    }
    if (status) {
      return theme[status];
    }
    return theme.primaryForeground;
  }};
  
  background-color: ${({
    theme, status, disabled,
  }) => {
    if (disabled) {
      return theme.muted;
    }
    if (status) {
      return `${theme[status]}16`;
    }
    return theme.primary;
  }};
  
  border: ${({ theme, status, disabled }) => {
    if (disabled) {
      return theme.mutedForeground;
    }
    if (status) {
      return `${theme[status]}90`;
    }
    return theme.primary;
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  border-radius: 16px;
  width: 100%;
  font-weight: 600;
`;

export const Secondary = styled(BaseButton)`
  width: max-content;
  padding: 4px;
  color: ${({ theme }) => theme.primary};
  background-color: transparent;
  border: ${({ theme, status }) => {
    if (status) {
      return `${theme[status]}90`;
    }
    return theme.secondaryBorder;
  }};
`;

export const Link = styled(BaseButton)`
  background-color: transparent;
  padding: 0;
  text-decoration: underline;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.primaryForeground};
`