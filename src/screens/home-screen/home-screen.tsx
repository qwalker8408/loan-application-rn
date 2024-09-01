import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, View } from '../../primitives';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useQuery} from '@apollo/client';
import { Header, Body, Footer, Wrapper } from './home-screen.style';
import { loans } from '../../api/graphql/queryLoans';
import BodyLoans from './components/body-loans/body-loans';
import {RootStackParamList} from '../../index.d'

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({navigation}: Props) {
  const insets = useSafeAreaInsets(); 
  const { loading, error, data } = useQuery(loans);

  const loanOfferings = data?.loanProducts || []

  return (
    <View 
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        }}
        >
      <Wrapper>
      <Header>
        <Text variant='h1'>Loan Application Dashboard</Text>
      </Header>
      <Body>
        {loading 
        ? <ActivityIndicator /> 
        :  <BodyLoans loans={loanOfferings}/> }
        {error 
        ? <Text>Error : {error.message}</Text> 
        : null }
      </Body>
      <Footer>
        <Button onPress={() => navigation.navigate('Loan Application')}>APPLY FOR A LOAN</Button>
      </Footer>
      </Wrapper>
    </View>
    
  );
}
