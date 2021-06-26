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
} from "recharts";

const fetchHistory = async (name) => {
  const res = await getHistoricData(name);
  if (res.status === 200 || res.status === 201) {
    return res.data;
  }
};

export const Chart = ({ name }) => {
//   const { data, status } = useQuery(
//     ["history-data", name],
//     () => fetchHistory(name),
//     {
//       staleTime: 2000,
//     }
//   );

  const chartdata = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <>
      {status === "loading" ? (
        <div className={styles.container}>
          <Spinner width="3rem" />
        </div>
      ) : (
        <>
          <LineChart
            width={1000}
            height={400}
            data={chartdata}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          </LineChart>
        </>
      )}
    </>
  );
};
