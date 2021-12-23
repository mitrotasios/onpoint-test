import React from 'react';
import './Cards.css';
import './KpiCard.css';

export default function KpiCard() {
    return (
        <div className="container d-flex h-100 flex-column">
            <div className="row card-header">
                <div className="col my-auto card-title">Dashboard</div>
            </div>
            <div className="row card-body d-flex justify-content-start flex-fill h-100 py-4">
                <div className="col kpi-wrapper d-inline-flex h-100"> 
                    <div className="col-3 kpi-card px-5 py-3 d-flex h-100">
                        <div className="kpi-wrapper my-auto">
                            <div className="kpi-card-title">Kpi #1</div>
                            <div className="kpi-card-number">10.000</div>
                            <div className="kpi-card-subtitle">some subtitle</div>
                        </div>
                    </div>
                    <div className="col-3 kpi-card px-5 py-3 d-flex h-100">
                        <div className="kpi-wrapper my-auto">
                            <div className="kpi-card-title">Kpi #2</div>
                            <div className="kpi-card-number">10.000</div>
                            <div className="kpi-card-subtitle">some subtitle</div>
                        </div>
                    </div>
                    <div className="col-3 kpi-card px-5 py-3 d-flex h-100">
                        <div className="kpi-wrapper my-auto">
                            <div className="kpi-card-title">Kpi #3</div>
                            <div className="kpi-card-number">10.000</div>
                            <div className="kpi-card-subtitle">some subtitle</div>
                        </div>
                    </div>
                    <div className="col-3 kpi-card px-5 py-3 d-flex h-100">
                        <div className="kpi-wrapper my-auto">
                            <div className="kpi-card-title">Kpi #4</div>
                            <div className="kpi-card-number">10.000</div>
                            <div className="kpi-card-subtitle">some subtitle</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row"></div>
        </div>
    );
}
