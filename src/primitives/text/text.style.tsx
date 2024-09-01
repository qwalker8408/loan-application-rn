import * as React from 'react'
import styled from 'styled-components/native';
import { statusTypes } from '../../index.d';

const BaseText = styled.Text<{ status?: statusTypes }>`
  font-family: 'Roboto-Medium';
  color: ${({ theme, status }) => {
    if (status === 'danger') {
      return theme.danger;
    }
    if (status === 'warning') {
      return theme.danger;
    }
    if (status === 'success') {
      return theme.danger;
    }
    return theme.foreground;
  }};
  font-size: 12px;
`;

const createForwardRefComponent = (Component: any) => 
  React.forwardRef<any, any>((props, ref) => <Component {...props} ref={ref} />);

export const P = createForwardRefComponent(styled(BaseText)``);
export const H1 = createForwardRefComponent(styled(BaseText)`
  font-size: 32px;
  letter-spacing: 1px;
  font-weight: 800;
`);
export const H2 = createForwardRefComponent(styled(BaseText)`
  font-size: 28px;
  font-weight: bold;
`);
export const H3 = createForwardRefComponent(styled(BaseText)`
  font-size: 20px;
  font-weight: bold;
`);
export const H4 = createForwardRefComponent(styled(BaseText)`
  font-size: 18px;
  font-weight: bold;
`);
export const H5 = createForwardRefComponent(styled(BaseText)`
  font-size: 16px;
  font-weight: bold;
`);
export const H6 = createForwardRefComponent(styled(BaseText)`
  font-size: 14px;
  font-weight: bold;
`);
export const Inline = createForwardRefComponent(styled(BaseText)`
  display: inline;
  width: max-content;
  line-height: 1;
`);