import Head from "next/head";
import { Slider } from "../components/organism/Slider";
import { DataSection } from "../components/organism/DataSection";
import styled from '@emotion/styled'
import {CoinContext} from "../context/CoinContext";
import {useContext} from 'react'

const PageWrapper = styled.div`
 padding: 3rem;
`
const CoinTitle = styled.h1`
  font-size: ${({ theme }) => theme.font.size.big};
  text-transform: uppercase;
  margin: 2rem 0;
  opacity: 0.7;
`

export default function Home() {
  const [coinName, setCoinName] = useContext(CoinContext);

  
  return (
    <PageWrapper>
      <Head>
        <title>Cryptocurrency Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      
       <Slider/>
       <CoinTitle>{coinName}</CoinTitle>
     <DataSection/>
    </PageWrapper>
  );
}
