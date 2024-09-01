import styled, { css } from 'styled-components/native';
import { Label } from '..';

export const InputWrapper = styled.View`
  gap: 8px;
`;

export const Input = styled.TextInput<{ isLoading?: boolean, isSuccess?: boolean, disabled?: boolean }>`
  color: ${({ theme }) => theme.inputForeground};
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${({ theme, isSuccess }) => (isSuccess ? theme.success : theme.inputBorder)};
  background-color: transparent;
  padding: 16px;
  font-size: 14px;
  opacity: 1;
  margin-bottom: 16px;

  &:focus {
    border-color: ${({ theme, isSuccess }) => (isSuccess ? theme.success : theme.inputBorder)};
    color: ${({ theme }) => theme.accent};
  }

  ${({ disabled }) => {
    disabled && `
      cursor: not-allowed;
      opacity: 0.5;
    `;
  }}
`;

export const FileLabel = styled(Label)`
  display: flex;
  align-items: center;
  border: none;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};
  cursor: pointer;
`;
