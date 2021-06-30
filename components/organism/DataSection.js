import React from 'react'
import { Chart } from './Chart'
import { MarketList } from './MarketList'
import styled from '@emotion/styled';
import {Box} from 'rebass';


const Container = styled(Box)`
 display: flex;
 height: 70vh;
`

export const DataSection = () => {
    return (
        <Container>
            <Chart/>
            <MarketList/>
        </Container>
    )
}
