import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ dresponse }) => {
  const state = {
    labels: dresponse['month'],
    datasets: [
      {
        label: 'Monthly Expense',
        lineTension: 0.5,
        backgroundColor: '#314f85',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: dresponse['amount'],
      },
    ],
  };

  return (
    <div>
      <Line data={state} />
    </div>
  );
};

export default Chart;
