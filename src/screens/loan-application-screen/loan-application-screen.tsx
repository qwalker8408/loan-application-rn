import * as React from 'react';
import { Text, FormProvider, FormField, FormItem, FormLabel, FormControl, FormMessage, Input, Button } from '../../primitives';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMutation } from 'react-query';
import { POST } from '../../api/http/utils';
import {RootStackParamList} from '../../index.d'
import Toast from 'react-native-toast-message';
import { ArrowLeftCircle } from 'lucide-react-native';
import { useTheme } from 'styled-components';

import {Wrapper, HeadingWrapper, FormWrapper, ButtonWrapper, GoBack} from './loan-application-screen.style'

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  emailAddress: z.string()
    .email({
      message: 'Please ensure the email format is correct',
    })
    .min(2, {
      message: 'Email is required',
    }),
  loanAmount: z.coerce.number({
      message: 'Loan amount must be a positive number.',
    }).min(3, {
      message: 'Loan must be entered',
    }),
  loanPurpose: z.string().min(2, {
    message: 'Please provide a reason for the loan.',
  }),

});

type Props = NativeStackScreenProps<RootStackParamList, 'Loan Application'>;
interface LoanApplicationPostTypes {
  full_name: string
  email: string
  loan_amount: number
  loan_purpose: string
}

export default function LoanApplicationScreen({navigation}: Props) {
  const theme = useTheme()
  const {mutate, isLoading} = useMutation({
    mutationFn: ({variables}:{variables: LoanApplicationPostTypes}) => POST({
      url: '/apply-loan',
      variables
    }),
    onSuccess: () => {
      Toast
      .show({
        type: 'success',
        text1: 'Awesome',
        text2: 'Loan Application recieved. We will review shortly',
        onHide: () => navigation.navigate('Home'),
        onPress: () => navigation.navigate('Home')
      });
    },
    onError: (error) => {
      Toast.show({
        type: 'error',
        text1: 'Something went wrong',
        text2: JSON.stringify(error)
      });
    }
  })

  const form = useForm<z.infer<typeof formSchema>>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      emailAddress: '',
      loanAmount: 0,
      loanPurpose: '',
    },
  },);


  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    mutate({variables: {
      full_name: values.fullName,
      email: values.emailAddress,
      loan_amount: values.loanAmount,
      loan_purpose: values.loanPurpose
    }})
  }

  return (
    <Wrapper>
      <HeadingWrapper>
        <GoBack onPress={() => navigation.goBack()}>
          <ArrowLeftCircle color={theme.foreground} size="16px" />
        </GoBack>
        <Text variant="h1">Apply for a loan</Text>
      </HeadingWrapper>
      <FormWrapper>      
      <FormProvider {...form}>
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Full Name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="emailAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="yourname@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="loanAmount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Loan Amount</FormLabel>
              <FormControl>
                <Input
                  keyboardType='numeric'
                  placeholder="UGX"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="loanPurpose"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Loan Purpose</FormLabel>
              <FormControl>
                <Input
                  placeholder="UGX"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </FormProvider>
      </FormWrapper>
      <ButtonWrapper>
        <Button 
          disabled={!form.formState.isValid || isLoading}
          onPress={form.handleSubmit(onSubmit)}
        >SUBMIT</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}
