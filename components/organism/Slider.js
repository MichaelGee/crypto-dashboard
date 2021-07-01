import React, { useRef } from "react";
import Carousel from "../molecules/Carousel";
import styled from "@emotion/styled";
import { Box } from "rebass";
import { LeftButton } from "../atoms/LeftButton";
import { RightButton } from "../atoms/RightButton";
import { useQuery } from "react-query";
import {PriceCard } from "../atoms/PriceCard"
import styles from "../../styles/Home.module.css";
import {getCurrencyTicker} from '../../services/api';
import { v4 as uuidv4 } from "uuid";


const fetchTickerData = async () => {
    const res = await getCurrencyTicker();
    if (res.status === 200 || res.status === 201) {
      return res.data;
    }
    
  };

const Container = styled(Box)`
  align-items: flex-end;
  flex-direction: column;
  display: flex;
`;

export const Slider = () => {
  const sliderRef = useRef();
  
  const { data, status } = useQuery("crypto-data", fetchTickerData, {
    staleTime: 2000,
    // refetchInterval: 10000,
  });

  


  return (
    <Container>
      <Box display="flex">
        <LeftButton onClick={() => sliderRef.current.leftScroll()} />
        <RightButton onClick={() => sliderRef.current.rightScroll()} />
      </Box>
      <Carousel ref={sliderRef}>
          <Box display='flex'>
            {data &&
              data.map((data) => (
                <Box display='flex' mx='0.5rem' width='100%'>
                  <PriceCard item={data} key={uuidv4()} />
                </Box>
              ))}
          </Box>
      </Carousel>
    </Container>
  );
};
