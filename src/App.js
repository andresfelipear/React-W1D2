import './style.css';
import Header from './Header';
import SampleState from './SampleState';
import SectionA from './Section/SectionA';
import SectionC from './Section/SectionC';
import SectionB from './Section/SectionB';

function App() {
  return (
    <div className="App">
     <Header/>
     <SampleState/>
     <hr/>
     <SectionA/>
     <SectionB/>
     <SectionC/>
    </div>
  );
}

export default App;
