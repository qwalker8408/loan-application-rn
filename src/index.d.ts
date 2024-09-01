export type RootStackParamList = {
    Home: undefined;
    'Loan Application': undefined;
  };

type statusTypes = 'danger' | 'warning' | 'success'

export type TextVariant = 'inline' | 'p' | 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1'

export interface loanResponseType {
    id: string
    name: string
    interestRate: number
    maximumAmount: number
}