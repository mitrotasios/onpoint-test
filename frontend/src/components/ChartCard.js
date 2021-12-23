import React from 'react';
import './Cards.css';
import './ChartCard.css';
import YearToDate from './YearToDateCourse';
import LineChart from './LineChart';
import { Dropdown } from 'react-bootstrap';

export default function ChartCard() {
    return (
        <div className="container d-flex h-100 flex-column">
            <div className="row card-header">
                <div className="col">
                    <div className="my-auto card-title d-inline-block">Year-To-Date</div>
                    <div className="my-auto d-inline-block float-end">
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                Last Month
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">1M</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">1Y</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">5Y</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <div className="row card-body d-flex justify-content-start flex-fill">
                <div className="col h-100 chart-wrapper">
                    <LineChart />
                </div>
            </div>
            <div className="row"></div>
        </div>
    );
}
