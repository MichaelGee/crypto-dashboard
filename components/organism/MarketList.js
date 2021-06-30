import styled from "@emotion/styled";
import { PriceItem } from "../atoms/PriceItem";
import { Spinner } from "../atoms/Spinner";
import styles from "../../styles/Home.module.css";
import { getCurrencyTicker } from "../../services/api";
import { v4 as uuidv4 } from "uuid";
import { useQuery } from "react-query";
import { Box } from "rebass";

const Container = styled.div`
  overflow-y: auto;
  -ms-overflow-style: none;
  height: 100%;
`;

const fetchTickerData = async () => {
  const res = await getCurrencyTicker();
  if (res.status === 200 || res.status === 201) {
    return res.data;
  }
};
export const MarketList = () => {
  const { data, status } = useQuery("crypto-data", fetchTickerData, {
    staleTime: 2000,
    // refetchInterval: 10000,
  });

  

  return (
    <Container>
          {data &&
            data.map((data) => (
              <>
                <PriceItem item={data} key={uuidv4()} />
              </>
            ))}
    </Container>
  );
};
