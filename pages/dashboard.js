import Head from "next/head";
import {useState, useEffect, useRef} from 'react'
import styles from "../styles/Home.module.css";
import { getCurrencyTicker } from "../services/api";
import { PriceCard } from "../components/atoms/PriceCard";
import { PriceItem } from "../components/atoms/PriceItem";
import { Flex, Box } from "rebass";
import { v4 as uuidv4 } from "uuid";
import { useQuery } from "react-query";
import { Spinner } from "../components/atoms/Spinner";
import {Chart} from "../components/organism/Chart";
import Carousel from "../components/molecules/Carousel";
import { Slider } from "../components/organism/Slider";
import { MarketList } from "../components/organism/MarketList";
import { DataSection } from "../components/organism/DataSection";
import styled from '@emotion/styled'


const PageWrapper = styled.div`
 padding: 3rem;
`


export default function Home() {


  
  return (
    <PageWrapper>
      <Head>
        <title>Cryptocurrency Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      
       <Slider/>
      
     <DataSection/>
    </PageWrapper>
  );
}
