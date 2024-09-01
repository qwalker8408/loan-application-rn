import * as React from 'react';
import { View as StyledView } from './view.style';

export default function View({ children, ...props }: { children: React.ReactNode }) {
  return (
    <StyledView {...props}>
      {children}
    </StyledView>
  );
}
