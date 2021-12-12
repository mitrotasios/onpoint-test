import logo from './logo.svg';
import './App.css';
import YearToDate from './components/YearToDateCourse';

function App() {
  return (
    <div className="App">
      <div className="container-fluid" style={{"height": "100vh"}}>
        <div className="row h-100">
          <div className="col-3 h-50 w-50 my-auto mx-auto main-frame"> 
            <YearToDate />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
