import * as React from 'react'
import styled from 'styled-components/native';


const createForwardRefComponent = (Component: any) => 
  React.forwardRef<any, any>((props, ref) => <Component {...props} ref={ref} />);

export const FormItemCSS = createForwardRefComponent(styled.View`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  `);
