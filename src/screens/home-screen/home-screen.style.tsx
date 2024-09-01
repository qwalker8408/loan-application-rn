import styled from 'styled-components/native';

export const Wrapper = styled.View`
    background-color: ${({ theme }) => theme.background};
    padding: 0 16px;
    height: 100%;
    justify-content: center;
    align-items: center;
`

export const Header = styled.View`
    height: 200px;
    justify-content: center;
    align-items: flex-start;
`

export const Body = styled.View`
    flex: 1;
`

export const Footer = styled.View`
    height: 100px;
    width: 100%;
    justify-content: center;
    align-items: center;
`