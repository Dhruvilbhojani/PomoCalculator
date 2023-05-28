import React from 'react'
import { useState } from 'react'
import '../component/calculator.css'

export const Calculator = (props) => {
    const [calc, setCalc] = useState("");
    const [res, setRes] = useState("");
    const operator = ['%', '/', '*', '-', '+', '.', '='];

    const calculate = () => {
        let value = calc;
        const len = value.length;
        if (operator.includes(value.charAt(len - 1))) {
            const nvalue = value.slice(0, -1);
            setCalc(nvalue);
            return setRes(evalMath(nvalue));
        }

        return setCalc(evalMath(calc).toString());
    }
    const del = () => {
        if (calc === '') {
            return;
        }
        const value = calc.slice(0, -1);
        setCalc(value);
        const len = value.length;
        if (operator.includes(value.charAt(len - 1))) {
            const nvalue = value.slice(0, -1);
            setRes(evalMath(nvalue));
        }
        else {
            setRes(evalMath(value));
        }

    }
    const updateCalc = (value) => {
        if ((operator.includes(value) && calc === '') || operator.includes(value) && operator.includes(calc.slice(-1))) {
            return;
        }
        setCalc(calc + value);
        if (!operator.includes(value)) {
            setRes(evalMath(calc + value).toString());
        }
    }
    if(props.active){
        return ;
    }

    return (
            <div className="calc">
                Calculator
                <div className="row1">
                    <div className="display">
                        <span>{calc || "0"}</span> {res ? <span className='res'>= {res}</span> : ''}
                    </div>
                </div>
                <div className="row">
                    <button onClick={() => { setRes(""); setCalc(""); }} className="allClear">AC</button>
                    <button onClick={() => { del(); }} className="del">DEL</button>
                    <button onClick={() => { updateCalc('%') }} className="modulo">%</button>
                    <button onClick={() => { updateCalc('/') }} className="division">/</button>
                </div>
                <div className="row">
                    <button onClick={() => { updateCalc('7') }} className="7">7</button>
                    <button onClick={() => { updateCalc('8') }} className="8">8</button>
                    <button onClick={() => { updateCalc('9') }} className="9">9</button>
                    <button onClick={() => { updateCalc('*') }} className="multiply">*</button>
                </div>
                <div className="row">
                    <button onClick={() => { updateCalc('4') }} className="4">4</button>
                    <button onClick={() => { updateCalc('5') }} className="5">5</button>
                    <button onClick={() => { updateCalc('6') }} className="6">6</button>
                    <button onClick={() => { updateCalc('-') }} className="sub">-</button>
                </div>
                <div className="row">
                    <button onClick={() => { updateCalc('1') }} className="1">1</button>
                    <button onClick={() => { updateCalc('2') }} className="2">2</button>
                    <button onClick={() => { updateCalc('3') }} className="3">3</button>
                    <button onClick={() => { updateCalc('+') }} className="add">+</button>
                </div>
                <div className="row">
                    <button onClick={() => { updateCalc('00') }} className="00">00</button>
                    <button onClick={() => { updateCalc('0') }} className="0">0</button>
                    <button onClick={() => { updateCalc('.') }} className=".">.</button>
                    <button onClick={() => { calculate() }} className="enter">=</button>
                </div>
            </div>
    )
}
