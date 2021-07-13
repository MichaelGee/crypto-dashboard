import Head from "next/head";
import { Slider } from "../components/organism/Slider";
import { DataSection } from "../components/organism/DataSection";
import styled from "@emotion/styled";
import { CoinContext } from "../context/CoinContext";
import { PriceContext } from "../context/PriceContext";
import { IconContext } from "../context/IconContext";
import { useContext } from "react";
import { Box } from "rebass";

const PageWrapper = styled.div`
  padding: 3rem;
`;
const CoinTitle = styled.h1`
  font-size: ${({ theme }) => theme.font.size.big};
  text-transform: uppercase;
  margin: 2rem 0;
  opacity: 0.7;
  font-weight: 300;
`;
const Price = styled.div`
  margin-left: 1rem;
  margin-bottom: 1rem
  margin-top: 8px;
  background: #33cc7126;
  text-transform: lowercase;
  font-weight: 100;
  font-size: 1.5rem;
  line-height: 32px;
  border-radius: 16px;
  display: flex;
  height: 32px;
  padding: 0 16px;
  jusify-content: center;
  align-items: center;
  color: #000;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 1.5%;
  margin-right: ${({ theme }) => theme.space.one};
`;

export default function Home() {
  const [coinName, setCoinName] = useContext(CoinContext);
  const [coinPrice, setCoinPrice] = useContext(PriceContext);
  const [icon, setIcon] = useContext(IconContext);

  return (
    <PageWrapper>
      <Head>
        <title>Cryptocurrency Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Slider />
      <Box display="flex" alignItems="center">
        {icon && <Icon src={icon}/>}
        {coinName && <CoinTitle>{coinName}</CoinTitle>}
        {coinPrice && <Price>${coinPrice}</Price>}
      </Box>
      <DataSection />
      <a href="https://nomics.com/" target="_blank">
        Crypto Market Cap & Pricing Data Provided By Nomics.
      </a>
    </PageWrapper>
  );
}
