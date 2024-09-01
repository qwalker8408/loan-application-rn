import * as React from 'react';
import { TextProps, StyleProp, TextStyle } from 'react-native';
import { TextVariant, statusTypes } from '../../index.d';
import { Inline, P, H6, H5, H4, H3, H2, H1 } from './text.style';

interface CustomTextProps extends TextProps {
  variant?: TextVariant, 
  status?: statusTypes, 
  children: React.ReactNode,
  style?: StyleProp<TextStyle>
}

const Text = React.forwardRef<any, CustomTextProps>(({ variant = 'p', status, children, style, ...props }, ref) => {
  if (variant === 'h1') {
    return <H1 ref={ref} status={status} style={style} {...props}>{children}</H1>;
  }

  if (variant === 'h2') {
    return <H2 ref={ref} status={status} style={style} {...props}>{children}</H2>;
  }

  if (variant === 'h3') {
    return <H3 ref={ref} status={status} style={style} {...props}>{children}</H3>;
  }

  if (variant === 'h4') {
    return <H4 ref={ref} status={status} style={style} {...props}>{children}</H4>;
  }

  if (variant === 'h5') {
    return <H5 ref={ref} status={status} style={style} {...props}>{children}</H5>;
  }

  if (variant === 'h6') {
    return <H6 ref={ref} status={status} style={style} {...props}>{children}</H6>;
  }

  if (variant === 'inline') {
    return <Inline ref={ref} status={status} style={style} {...props}>{children}</Inline>;
  }

  return <P ref={ref} status={status} style={style} {...props}>{children}</P>;
});

Text.displayName = 'Text';

export default Text;
