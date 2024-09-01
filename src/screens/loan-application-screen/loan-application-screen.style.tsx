import styled from 'styled-components/native'

export const Wrapper = styled.ScrollView`
    background-color: ${({theme}) => theme.background};
    gap: 16px;
`

export const HeadingWrapper = styled.View`
    height: 160px;
    flex-direction: row;
    align-items: center;
    padding-top: 32px;
    padding-left: 16px;
    gap: 16px;
`

export const FormWrapper = styled.View`
    padding-left: 16px;
    padding-right: 16px;
    justify-content: center;
    flex: 1;
    width: 100%;
`

export const ButtonWrapper = styled.View`
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
`
export const GoBack = styled.Pressable``