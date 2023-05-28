import React, { useState, useEffect } from 'react';
import '../component/pomodoro.css';

export const Pomodoro = (props) => {
    const [seconds, setSeconds] = useState(1500);
    const [isActive, setIsActive] = useState(false);
    const [temp, setTemp] = useState(1500);
    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => {
                    if (prevSeconds <= 0) {
                        clearInterval(interval);
                        return setSeconds(0) && setIsActive(false);
                    }
                    return prevSeconds - 1;
                });

            }, 1000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isActive]);

    const toggleTimer = () => {
        setIsActive(!isActive);
    };


    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;

        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        return `${formattedMinutes}:${formattedSeconds}`;
    };
    if (props.active) {
        return;
    }
    return (
        <div className='pomodoro'>
            <div className="menu">
                <div className="menuPomodoro" onClick={() => {
                    setTemp(1500);
                    setSeconds(1500);
                    setIsActive(false);
                }}>Pomodoro</div>
                <div className="menuShortBreak" onClick={() => {
                    setTemp(300);
                    setSeconds(300);
                    setIsActive(false);
                }}>Short Break</div>
                <div className="menuLongBreak" onClick={() => {
                    setTemp(900);
                    setSeconds(900);
                    setIsActive(false);
                }}>Long Break</div>
            </div>
            <div className="timerDisplay">
                <p className="timerText">{formatTime(seconds)}</p>
            </div>
            <div className='buttons'>
                <button className="btn" onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</button>
                <button className="btn" onClick={() => {
                    setSeconds(temp);
                    setIsActive(false);
                }}>Reset</button>
            </div>
        </div>
    );
};