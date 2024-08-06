import "./App.css";
import ClassBind from "./ClassBind";
import Counter from "./Counter";
import Prac from "./Prac";
import Prac2 from "./Prac2";
import SyntheticEvent from "./SyntheticEvent";

function App() {
    return (
        <div className="App">
            <SyntheticEvent />
            <hr />

            <ClassBind />
            <hr />

            <Counter />
            <hr />

            <Prac />
            <hr />

            <Prac2/>
        </div>
    );
}

export default App;
