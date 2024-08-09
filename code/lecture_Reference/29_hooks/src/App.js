import UseMemoEx from './components/UseMemoEx';
import './App.css';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseReducerEx from './components/UseReducerEx';
import Faq from './components/Faq';
import useTitle from './hooks/useTitle';
import Form from './components/react-hook-form/Form';

function App() {
    useTitle('React Hooks 학습중!');
    return (
        <div className="App">
            <UseMemoEx />
            <hr />

            <UseCallbackEx />
            <hr />

            <UseCallbackEx2 postId={7} />
            <hr />

            <UseReducerEx />
            <hr />

            <Faq />
            <hr />

            <Form />
        </div>
    );
}

export default App;
