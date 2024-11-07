import React, { useState } from 'react';
import { evaluate } from 'mathjs';  // Import math.js
import "../App.css";

export default function Calculator() {
    const [display, setDisplay] = useState("");

    function handClick(e) {
        const n = e.target.textContent;  
        setDisplay(display.concat(n));
    }

    function final() {
        try {
            // Use math.js to evaluate the expression safely
            const res = evaluate(display);
            setDisplay(res.toString());
        } catch (error) {
            setDisplay("Error");
        }
    }

    function clearAll() {
        setDisplay(""); 
    }

    function clear() {
        setDisplay(display.toString().slice(0, -1));  
    }

    return (
        <div className='calculator-grid'>
            <div className='output'>
                <div className='current-operand'>{display}</div>
            </div>
            <button className='span-two' onClick={clearAll}>AC</button>
            <button onClick={clear}>DEL</button>
            <button onClick={handClick}>/</button>
            <button onClick={handClick}>1</button>
            <button onClick={handClick}>2</button>
            <button onClick={handClick}>3</button>
            <button onClick={handClick}>*</button>
            <button onClick={handClick}>4</button>
            <button onClick={handClick}>5</button>
            <button onClick={handClick}>6</button>
            <button onClick={handClick}>+</button>
            <button onClick={handClick}>7</button>
            <button onClick={handClick}>8</button>
            <button onClick={handClick}>9</button>
            <button onClick={handClick}>-</button>
            <button onClick={handClick}>.</button>
            <button onClick={handClick}>0</button>
            <button className='span-two' onClick={final}>=</button>
        </div>
    );
}

