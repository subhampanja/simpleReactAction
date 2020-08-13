import React from 'react';
import './Rectangle.css';

function Rectangle({colorValue}) {
    return (
        <div className={`rectangle_main ${colorValue === true ? "green" : ""}`}>
        </div>
    )
}

export default Rectangle
