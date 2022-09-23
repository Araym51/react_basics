import React, {useState} from "react";
import Counter from "./components/Counter";
import './styles/App.css'

function App() {
    let [value, setValue] = useState('текст в инпуте')

    return (
        <div className="App">
            <Counter/>
            <div className="post">
                <strong>1. Javascript</strong>
                <div>
                    Javascript - язык программирования
                </div>
                <div className="post_btns">
                    <button>Удалить</button>
                </div>
            </div>

        </div>
    );
}

export default App;
