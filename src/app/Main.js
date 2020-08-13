import React,{ useState} from 'react';
import './Main.css';
import Rectangle from './component/Rectangle';

function Main() {
    const [buttonClick , setButtonClick] = useState(false);

    return (
        <div className="main">
            <div className="main_main">
                <h1>HELLO</h1>
                <h1>HELLO HELLO</h1>
                <h1>HELLO HELLO HELLO</h1>
                <h1>HELLO HELLO HELLO HELLO</h1>
                <div className="rect">
                    <Rectangle colorValue={buttonClick}/>
                </div>
            </div>
            <div className="button_main">
                <button onClick={e =>  buttonClick === true ? setButtonClick(false) : setButtonClick(true) } className={`button ${buttonClick === true ? "green" : ""}`}>{buttonClick === false ? "Press" : "Button Clicked"}</button>
            </div>
        </div>
    )
}

export default Main
