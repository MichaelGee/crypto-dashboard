import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {getCurrencyTicker} from '../services/api';
import {useEffect} from 'react';
import { PriceCard } from '../components/atoms/PriceCard';
import {Flex, Box} from 'rebass'
import { v4 as uuidv4 } from 'uuid';

export const getStaticProps = async () => {
  
     const {data} = await getCurrencyTicker('BTC');
     
  return {
    props: {data}
  }
}

export default function Home({data}) {
  

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
      
      <Flex flexWrap="wrap" mx="-1.5rem">
        {data && data.map((data) => (
          <Box key={uuidv4()} px="1.5rem" mb="3rem" width={[1 / 2, 1 / 2, 1 / 3, 1 / 4, 1 / 5]}>
            <PriceCard item={data} key={uuidv4()}/>
          </Box>
        ))}
      </Flex>
    </div>
  )
}
