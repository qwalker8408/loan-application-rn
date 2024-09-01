import { gql } from '@apollo/client';

export const loans = gql`
  query loans {
    loanProducts {
      id
      name
      interestRate
      maximumAmount
    }
  }
`