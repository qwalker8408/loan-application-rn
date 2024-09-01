import styled from 'styled-components/native'

export const ButtonRow = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Row = styled.View`
    flex-direction: row;
    width: 100%;
`

export const Column = styled.View`
    align-items: flex-start;
    flex: 1;
`

export const SmallActionButton = styled.Pressable`
    padding: 4px 8px;
    border: 1px solid ${({theme}) => theme.primary};
    borderRadius: 16px;
`

export const SmallActionButtonText = styled.Text`
    color: ${({theme}) => theme.primary};
    fontSize: 9px;
    width: 64px;
`