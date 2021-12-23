import React from "react";
import "./Sidebar.css"

export default function Sidebar() {
    return (
        <div className="container">
            <div className="row logo-row">
                <div className="col">
                    <span style={{fontSize: "xx-large", fontWeight: 700}}>OnPoint</span>
                </div>
            </div>
            <div className="row menu-row mt-5">
                <div className="col-12 mb-3 menu-item">
                    <a href="/">Home</a>
                </div>
                <div className="col-12 mb-3 menu-item">
                    <a href="/">Components</a>
                </div>
                <div className="col-12 mb-3 menu-item">
                    <a href="/">Widgets</a>
                </div>
                <div className="col-12 mb-3 menu-item">
                    <a href="/">Apps</a>
                </div>
            </div>
        </div>
    );
}