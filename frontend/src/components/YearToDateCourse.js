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

function YearToDate() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);


  return (
    <div className="container h-100">
        <div className="row h-100">
            <div className="col-12 h-100 px-3 py-4">
                <div className="row h-50">
                    <div className="col col-6"> 
                        <div className="row card-title-row">
                            <div className="main-title"></div>
                            <div className="sec-title"></div>
                        </div>
                        <div className="row figure-row">
                            <div className="col float-right text-right figure-wrapper">
                                $&nbsp;30,847
                            </div>
                        </div>
                        <div className="row sec-figure-row">
                            <div className="col float-right text-right sec-figure-wrapper">
                                <b>+13%</b>&nbsp;vs&nbsp;last&nbsp;year
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row h-50">
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
                </div>
            </div>
        </div>
    </div>
  );
}

export default YearToDate;