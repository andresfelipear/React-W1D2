import logo from './logo.svg';
import './App.css';
import Header from './Header';
import SampleState from './SampleState';
import SectionA from './Section/SectionA';

function App() {
  return (
    <div className="App">
     <Header/>
     <SampleState/>
     <br/>
     <SectionA/>
    </div>
  );
}

export default App;
