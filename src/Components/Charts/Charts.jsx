import React from 'react';
import { Area, AreaChart } from 'recharts';

const Charts = () => {
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
            <AreaChart>
            <Area datakey='month'></Area>
            </AreaChart>
        </div>
    );
};

export default Charts;