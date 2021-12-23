import React, { useState } from 'react';
import './YearToDateCourse.css'
import { Line } from 'react-chartjs-2';

import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
  } from 'chart.js';

Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
);


export default function LineChart() {
    return (
        
            <Line 
                data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    datasets: [{
                        data: [50, 53, 54, 41, 44, 65, 50, 53, 60, 47, 44, 50, 46, 53, 50, 41, 44, 65, 10, 53, 60, 50, 56, 65],
                        fill: true,
                        backgroundColor: "rgba(225, 237, 255, 1)",
                        borderColor: "rgba(59, 130, 246, 1)",
                        borderWidth: "4"
                    }]
                }}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: {
                            display: false
                        },
                        yAxes: {
                            display: false
                        },
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    elements: {
                        point:{
                            radius: 0
                        }
                    }
                }}
            />
    );
}