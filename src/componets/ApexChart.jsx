import React from "react";
import Chart from "react-apexcharts";

const BudgetChart = ({ budgetTotal, budgets }) => {
  // Chart uchun ma'lumotlarni tayyorlaymiz
  const series = [
    {
      name: "Budgets",
      data: budgets.map((budget) => budget.maximum),
    },
  ];

  const options = {
    chart: {
      id: "budget-chart",
      type: "bar", // Sizga kerakli grafigi turini tanlang (line, bar, pie, va h.k.)
      height: "300",
    },
    xaxis: {
      categories: budgets.map((budget) => budget.name),
    },
    yaxis: {
      title: {
        text: "Amount ($)",
      },
    },
    title: {
      text: "Budgets Overview",
      align: "center",
    },
    tooltip: {
      y: {
        formatter: (val) => `$${val}`,
      },
    },
  };

  return (
    <div>
      <Chart options={options} series={series} type="bar" height="300" />
      <div className="total-budget">
        <h3>Total Budget: ${budgetTotal}</h3>
      </div>
    </div>
  );
};

export default BudgetChart;
