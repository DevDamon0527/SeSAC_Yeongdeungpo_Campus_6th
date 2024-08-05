import './App.css';
import ClassBind from './ClassBind';
import Counter from './Counter';
import Prac from './Prac';
import SyntheticEvent from './SyntheticEvent';

function App() {
  return (
    <div className="App">
      <SyntheticEvent/>
      <hr />

      <ClassBind/>
      <hr />

      <Counter/>
      <hr />

      <Prac/>
    </div>
  );
}

export default App;
