import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const StatisticsPage = () => {
  const data = useLoaderData();
  const quizTopic = data.data;

  let chartData = [];
  for (const topic of quizTopic) {
    chartData.push({ name: topic.name, quiz: topic.total });
  }

  return (
    <section className="sm:container mx-auto lg:max-w-7xl px-3 pt-10 pb-20">
      <div className="max-w-sm mx-auto relative -z-40">
      <h2 className="text-center py-4 font-semibold text-lg">Quiz Info</h2>
        <BarChart
          width={320}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 20,
            bottom: 5,
          }}
          className="w-full"
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" />
          <YAxis dataKey="quiz" />
          <Bar dataKey="quiz" fill="#8884d8" label={{ position: "top" }} />
        </BarChart>
      </div>
    </section>
  );
};

export default StatisticsPage;
