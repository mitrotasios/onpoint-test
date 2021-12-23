import './App.css';
import Sidebar from './components/Sidebar';
import KpiCard from './components/KpiCard';
import ChartCard from './components/ChartCard';

function App() {
  return (
    <div className="App">
      <div className="container-fluid" style={{"height": "100vh"}}>
        <div className="row h-100 mt-5">
          {/* <div className="col-3 h-50 w-50 my-auto mx-auto main-frame"> 
          </div> */}
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9">
            <div className="row kpi-row main-frame mb-3">
              <KpiCard />
            </div>
            <div className="row chart-row main-frame mb-3">
              <ChartCard />
            </div>
            <div className="row table-row main-frame mb-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
