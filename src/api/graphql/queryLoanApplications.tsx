import { gql, request } from 'graphql-request'
 
export const loanApplications = gql`
  {
  loan_applications {
    id
    full_name
    email
    loan_amount
    loan_purpose
  }
}
`