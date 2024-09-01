import styled from 'styled-components/native';

export const Label = styled.Text`
  display: block;
  color: ${({ theme }) => `${theme.inputForeground}60`};
  line-height: 1;
`;
