import './App.css';
import Button from './Button';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';

function App() {
  return (
    <div className="App">
      <FunctionComponent />
      <FunctionComponent name="KDT 3기"/>
      <hr />

      <ClassComponent />
      <ClassComponent name="KDT 3기"/>
      <hr />
      
      <Button link="https://www.google.com">Google</Button>
    </div>
  );
}

export default App;
