import Head from "next/head";
import styles from "../styles/Home.module.css";
import { getCurrencyTicker } from "../services/api";
import { PriceCard } from "../components/atoms/PriceCard";
import { Flex, Box } from "rebass";
import { v4 as uuidv4 } from "uuid";
import { useQuery } from "react-query";
import { Spinner } from "../components/atoms/Spinner";

const fetchData = async () => {
  const res = await getCurrencyTicker();
  if (res.status === 200 || res.status === 201) {
    return res.data;
  }
};

export default function Home() {
  const { data, status } = useQuery("crypto-data", fetchData);

  // const getData = async()=>{
  //   try{
  //    const res = await getCurrencyTicker('BTC');
  //    console.log(res.data);
  //   }catch(e){
  //     console.log(e)
  //   }
  // }
  // useEffect(()=>{
  //   getData();
  // },[])

  return (
    <div className={styles.container}>
      <Head>
        <title>Cryptocurrency Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {status === 'loading' ? <Spinner width= '3rem'/> : <Flex flexWrap="wrap" mx="-1.5rem">
        {data &&
          data.map((data) => (
            <Box
              key={uuidv4()}
              px="1.5rem"
              mb="3rem"
              width={[1 / 2, 1 / 2, 1 / 3, 1 / 4, 1 / 5]}
            >
              <PriceCard item={data} key={uuidv4()} />
            </Box>
          ))}
      </Flex>}
    </div>
  );
}
