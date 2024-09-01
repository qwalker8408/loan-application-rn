/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Toast from 'react-native-toast-message';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  SafeAreaProvider} from 'react-native-safe-area-context';
import { HomeScreen, LoanApplicationScreen } from './src/screens';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import useLocalTheme from './src/hooks/useTheme';
import {RootStackParamList} from './src/index.d'

function InnerApp({ children }: { children: React.ReactNode }): React.JSX.Element {
  const {theme, isDarkMode} = useLocalTheme();

  return (
    // let styled components handle the theme to the rest of the app
    <ThemeProvider theme={{...theme, isDarkMode}}>
      {children}
    </ThemeProvider>
  );
}

const queryClient = new QueryClient()

const client = new ApolloClient({
  uri: process.env.GRAPHQL_API,
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {

  return (
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={client}>
        <SafeAreaProvider>
          <InnerApp>
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                  name="Home"
                  options={{ headerShown: false }}
                  component={HomeScreen} 
                />
                <Stack.Screen 
                  name="Loan Application" 
                  options={{ headerShown: false }}
                  component={LoanApplicationScreen} 
                />
              </Stack.Navigator>
            </NavigationContainer>
          </InnerApp>
        </SafeAreaProvider>
      </ApolloProvider>
      <Toast />
    </QueryClientProvider>
  );
}

export default App;
