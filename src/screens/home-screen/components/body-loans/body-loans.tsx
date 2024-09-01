import React from 'react';
import { FlatList, ListRenderItemInfo, SafeAreaView, View } from 'react-native';
import { useTheme } from 'styled-components';
import { ArrowRight } from 'lucide-react-native';
import { Card, CardContent, CardHeader, CardTitle, Text } from "../../../../primitives"
import { Row, Column, ButtonRow, SmallActionButton, SmallActionButtonText } from "./body-loans.style"
import { loanResponseType } from '../../../../index.d'

const Loans: React.FC<{loans: loanResponseType[]}> = ({loans}) => {
    const theme = useTheme()

    if (!loans.length) {
        return <Text>There aren't any available offerings. Please contact our call center on 0800000000 or reach out to us on our WhatsApp group now.</Text>
    }

    const renderLoanItem = ({ item: loan, index }: ListRenderItemInfo<loanResponseType>) => (
        <Card 
            style={{ 
                margin: 8, 
                backgroundColor: index === 0 && theme.backgroundSecondary 
            }}
            >
            <CardHeader>
                <CardTitle>{loan.name}</CardTitle>
            </CardHeader>
            <CardContent>
                    <Row>
                        <Column>
                            <Text style={{fontWeight: 'bold'}}>Maximum Amount</Text>
                            <Text 
                                variant="h2" 
                                style={{color: theme.primary

                                }}
                            >
                                {`$${loan.maximumAmount}`}
                            </Text>
                            <Row>
                                <Text>Interest:</Text>
                                <Text>{`${loan.interestRate}%`}</Text>
                            </Row>
                        </Column>
                        <Column style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                            <SmallActionButton>
                                <ButtonRow>
                                    <SmallActionButtonText>Learn More</SmallActionButtonText>
                                    <ArrowRight color={theme.primary} size="16px" />
                                </ButtonRow>
                            </SmallActionButton>
                        </Column>
                    </Row>
                </CardContent>
        </Card>
    );

    const ItemSeparator = () => <View style={{ height: 8 }} />;

    return (
        <FlatList
            data={loans}
            renderItem={renderLoanItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ padding: 8 }}
            ItemSeparatorComponent={ItemSeparator}
        />
    );
}

export default Loans;
