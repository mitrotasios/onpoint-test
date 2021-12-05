import logo from './logo.svg';
import './App.css';
import YearToDate from './components/YearToDateCourse';

function App() {
  return (
    <div className="App">
      <div className="container-fluid" style={{"height": "100vh"}}>
        <div className="row h-100">
          <div className="col-3 h-50 my-auto mx-auto" style={{
            "border": "1.78px solid rgba(249, 249, 252, 1)", "borderRadius": "3.8315px", "width":"40%",
            "boxShadow": "0px 9.5045px 14.2567px rgba(0, 0, 0, 0.06), 0px 1.18806px 3.56419px rgba(0, 0, 0, 0.04), 0px 0px 0.594031px rgba(0, 0, 0, 0.04)"
          }}> 
            <YearToDate />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
