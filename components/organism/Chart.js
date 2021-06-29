import styles from "../../styles/Home.module.css";
import { getHistoricData } from "../../services/api";
import { Spinner } from "../atoms/Spinner";
import { useQuery } from "react-query";
import {
  LineChart,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  CartesianGrid,
  Line,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
import moment from "moment";

const fetchHistory = async (name) => {
  const res = await getHistoricData(name);
  if (res.status === 200 || res.status === 201) {
    return res.data;
  }
};

export const Chart = ({ name }) => {
  const { data, status } = useQuery(
    ["history-data", name],
    () => fetchHistory(name),
    {
      staleTime: 2000,
    }
  );

  const formatter = new Intl.NumberFormat("en-US", {
    currency: "USD",
  });

  //  const timeMapped = data?.prices?.slice(0, 15).map(prices => { return moment(prices[0]).format('LT')})
  //  const priceMapped = data?.prices?.slice(0, 15).map(time => { return  formatter.format(parseFloat(time[1]).toFixed(4))  })

  const mappedData = data?.prices?.slice(0, 288).map((data) => {
    return {
      date: moment(data?.[0]).format("HH:mm"),
      //  amount: formatter.format(parseFloat(data?.[1]).toFixed(4))
      amount: data?.[1],
    };
  });

  //   const roundedPrice = formatter.format(parseFloat(price).toFixed(4));

  const chartdata = mappedData;

  // const chartdata = [
  //     {
  //       name: "Page A",
  //       uv: 4000,
  //       pv: 2400,
  //       amt: 2400,
  //     },
  //     {
  //       name: "Page B",
  //       uv: 3000,
  //       pv: 1398,
  //       amt: 2210,
  //     },
  //     {
  //       name: "Page C",
  //       uv: 2000,
  //       pv: 9800,
  //       amt: 2290,
  //     },
  //     {
  //       name: "Page D",
  //       uv: 2780,
  //       pv: 3908,
  //       amt: 2000,
  //     },
  //     {
  //       name: "Page E",
  //       uv: 1890,
  //       pv: 4800,
  //       amt: 2181,
  //     },
  //     {
  //       name: "Page F",
  //       uv: 2390,
  //       pv: 3800,
  //       amt: 2500,
  //     },
  //     {
  //       name: "Page G",
  //       uv: 3490,
  //       pv: 4300,
  //       amt: 2100,
  //     },
  //   ];

  return (
    <>
      {status === "loading" ? (
        <div className={styles.container}>
          <Spinner width="3rem" />
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart width={1000} height={400} data={chartdata}>
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2451B7" stopOpacity={5} />
                <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <Area dataKey="amount" stroke="#2451B7" fill="url(#color)" />
            <XAxis dataKey="date" axisLine={false} />
            <YAxis dataKey="amount" axisLine={false} tickLine={false} />
            <Tooltip />
            <CartesianGrid opacity={1} vertical={false} />
            {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" /> */}
            {/* <Line type="monotone" dataKey="amount" stroke="#82ca9d" fill="#82ca9d" /> */}
          </AreaChart>
        </ResponsiveContainer>
      )}
    </>
  );
};
