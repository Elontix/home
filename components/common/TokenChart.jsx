import React from "react";
import { Chart } from "react-google-charts";
import { colors } from "../../theme/color";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {};

export function TokenChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={{
        legend: "none",
        backgroundColor: colors.bgOne,
      }}
      width={"100%"}
      height={"400px"}
    />
  );
}
