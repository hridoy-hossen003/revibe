
import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip , Legend , XAxis , YAxis , CartesianGrid, BarChart, Bar, LineChart, Line } from 'recharts';

const ChartContainer = () => {
    const productSales = [
  { month: "Jan", proteinPowder: 120, dumbbells: 60, yogaMats: 90 },
  { month: "Feb", proteinPowder: 150, dumbbells: 80, yogaMats: 110 },
  { month: "Mar", proteinPowder: 170, dumbbells: 75, yogaMats: 130 },
  { month: "Apr", proteinPowder: 200, dumbbells: 95, yogaMats: 140 },
  { month: "May", proteinPowder: 220, dumbbells: 110, yogaMats: 160 },
  { month: "Jun", proteinPowder: 250, dumbbells: 130, yogaMats: 180 },
  { month: "Jul", proteinPowder: 270, dumbbells: 150, yogaMats: 200 },
  { month: "Aug", proteinPowder: 260, dumbbells: 140, yogaMats: 190 },
  { month: "Sep", proteinPowder: 300, dumbbells: 170, yogaMats: 220 },
  { month: "Oct", proteinPowder: 320, dumbbells: 180, yogaMats: 240 },
  { month: "Nov", proteinPowder: 350, dumbbells: 200, yogaMats: 260 },
  { month: "Dec", proteinPowder: 400, dumbbells: 220, yogaMats: 300 }
];
    return (
      <div>
        <div className="p-32 bg-black grid grid-cols-3 gap-6">
          <div className="h-96 rounded-xl border-gray-400 p-4 border relative bg-gray-800">
            <h2 className="text-white text-center text-xl font-semibold rotate-270 absolute top-1/2 -left-6">
              Area Chart
            </h2>
            <ResponsiveContainer height={"100%"} width={"100%"}>
              <AreaChart
                Legend
                width={500}
                height={500}
                data={productSales}
                // margin={{ left: -35 }}
              >
                <CartesianGrid strokeDasharray={"5.5"}></CartesianGrid>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <YAxis></YAxis>
                <XAxis dataKey={"month"}></XAxis>
                <Area
                  stroke="red"
                  fill="yellow"
                  dataKey={"dumbbells"}
                  Tooltip
                ></Area>
                <Area stroke="gray" dataKey={"proteinPowder"}></Area>
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="h-96 relative rounded-xl border-gray-400 p-4 border bg-gray-800">
            <h2 className="text-white text-center text-xl font-semibold rotate-270 absolute top-1/2 -left-6">
              Bar Chart
            </h2>
            <ResponsiveContainer width={"100%"} height={"100%"}>
              <BarChart data={productSales}>
                <CartesianGrid strokeDasharray={"5.5"}></CartesianGrid>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <YAxis></YAxis>
                <XAxis dataKey={"month"}></XAxis>
                <Bar fill="gray" dataKey={"dumbbells"}></Bar>
                <Bar fill="olive" width={100} dataKey={"yogaMats"}></Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="h-96 relative rounded-xl border-gray-400 p-4 border bg-gray-800">
            <h2 className="text-white text-center text-xl font-semibold rotate-270 absolute top-1/2 -left-6">
              Line Chart
            </h2>
            <ResponsiveContainer width={"100%"} height={"100%"}>
              <LineChart data={productSales}>
                <CartesianGrid strokeDasharray={"5.5"}></CartesianGrid>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <YAxis></YAxis>
                <XAxis dataKey={"month"}></XAxis>
                <Line fill="gray" dataKey={"dumbbells"}></Line>
                <Line fill="olive" width={100} dataKey={"yogaMats"}></Line>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
};

export default ChartContainer;