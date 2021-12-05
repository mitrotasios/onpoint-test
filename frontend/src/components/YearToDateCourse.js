import React, { useState } from 'react';
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
                    <div className="col-6"> 
                        <div className="row" style={{"height": "15%"}}>
                            <div style={{"height": "100%", "width": "30%", "backgroundColor": "rgba(59, 130, 246, 0.5)", "display": "inline-block", "border-radius": "85px"}}></div>
                            <div style={{"height": "100%", "width": "65%", "backgroundColor": "rgba(209, 213, 219, 1)", "display": "inline-block", "marginLeft": "5%", "border-radius": "85px"}}></div>
                        </div>
                        <div className="row" style={{"height": "40%", "marginTop":"5%"}}>
                            <div className="col float-right text-right" style={{"color": "rgba(59, 130, 246, 1)", "fontFamily": "Helvetica", "fontStyle": "normal", "fontSize": "43.1552px", "fontWeight": "900", "display":"flex", "padding":"0px"}}>
                                $&nbsp;30,847
                            </div>
                        </div>
                        <div className="row">
                            <div className="col float-right text-right" style={{"color": "rgba(0, 176, 80, 1)", "fontFamily": "Helvetica", "fontStyle": "normal", "fontSize": "16px", "display":"flex", "padding":"0px"}}>
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