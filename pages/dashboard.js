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

const fetchTickerData = async () => {
  // const res = await getCurrencyTicker();
  // if (res.status === 200 || res.status === 201) {
  //   return res.data;
  // }
  
};


export default function Home() {
  const [name, setName] = useState('ethereum')
  
 
  useEffect(() => {
    setName(name.replace(/ /g, '-'));
  }, [])

  
  // console.log(tickerdata); 

  
  return (
    <>
      <Head>
        <title>Cryptocurrency Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
       <Slider/>
      {/* <Chart name={name}/> */}
     
      {/* {status === 'loading' ? (<div className={styles.container}><Spinner width= '3rem'/></div>) : <>
        {data &&
          data.map((data) => (
            <>
              <PriceCard item={data} key={uuidv4()} /> 
               <PriceItem item={data} key={uuidv4()}/>
            </>
          ))}
      </>} */}
    </>
  );
}
