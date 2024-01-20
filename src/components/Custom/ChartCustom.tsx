import React, { FC } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  label: string;
  value: number;
}

interface ChartCustomProps {
  data: DataPoint[];
  maxValue: number;
  barColor?: string;
  barSize?: number;
  xAxisLabel?: string;
  yAxisLabel?: string;
  chartTitle?: string;
  width?: number;
  height?: number;
}

const ChartCustom: FC<ChartCustomProps> = ({
  data,
  maxValue,
  barColor = "#41B137",
  barSize = 40,
  xAxisLabel = "X Axis Label",
  yAxisLabel = "Y Axis Label",
  chartTitle = "Chart Title",
  width = 500,
  height = 400,
}) => {
  return (
    <div className="p-5 flex flex-col items-center">
      <div className="relative p-3">
        <p className="absolute top-0 left-6 ">{yAxisLabel}</p>
        <p className="absolute bottom-10 right-0 ml-3 ">{xAxisLabel}</p>
        <ResponsiveContainer width={width} height={height}>
          <BarChart
            data={data}
            margin={{ top: 25, right: 25, left: 25, bottom: 25 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" interval={0} />
            <YAxis domain={[0, maxValue]} />
            <Tooltip />
            <Bar dataKey="value" fill={barColor} barSize={barSize} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <h2>{chartTitle}</h2>
    </div>
  );
};

export default ChartCustom;
