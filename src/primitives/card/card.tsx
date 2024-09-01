import React from 'react';
import { View, ViewProps, TextProps } from 'react-native';
import { ViewStyle, TextStyle } from 'react-native';

import { Text } from '..';
import { useTheme } from 'styled-components';

type CardProps = ViewProps;

const Card = React.forwardRef<View, CardProps>(
  ({ children, style, ...props }, ref) => {
    const theme = useTheme()

    return (
      <View
        ref={ref}
        style={[
          {
            backgroundColor: theme.background,
            borderColor: theme.inputBorder,
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: 8,
            width: 300
          },
          style,
        ]}
        {...props}
      >
        {children}
        </View>
    )
  }
);

type CardHeaderProps = ViewProps;

const CardHeader = React.forwardRef<View, CardHeaderProps>(
  ({ children, style, ...props }, ref) => (
    <View
      ref={ref}
      style={[
        {
          position: 'relative',
          flexDirection: 'column',
          width: '100%',
          paddingTop: 16,
          paddingLeft: 8
        } as ViewStyle,
        style,
      ]}
      {...props}
    >
      {children}
      </View>
  )
);

type CardTitleProps = TextProps;

const CardTitle = React.forwardRef<Text, CardTitleProps>(
  ({ children, style, ...props }, ref) => (
    <Text
      ref={ref}
      variant='h2'
      style={[
        {
          // Add any default styles for CardTitle here
        } as TextStyle,
        style,
      ]}
      {...props}
    >
      {children}
      </Text>
  )
);

interface CardContentProps extends ViewProps {
  children: React.ReactNode;
}

const CardContent = React.forwardRef<View, CardContentProps>(({ style, children, ...props }, ref) => {
  return (
    <View
     ref={ref} 
     style={[
      {
        position: 'relative',
        paddingTop: 16,
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom: 16
      } as ViewStyle,
      style,
    ]}
     {...props}>
      {children}
    </View>
  );
});

CardContent.displayName = 'CardContent';

Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardTitle.displayName = 'CardTitle';

export { Card, CardHeader, CardTitle, CardContent };
