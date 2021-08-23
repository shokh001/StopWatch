import React, { useState } from 'react'
import DisplayComponents from '../components/DisplayComponents'
import BtnDisplayComponents from '../components/BtnDisplayComponens'
import Counter from '../components/Counter/Counter'
import './style.css'

const StopWatch = () => {
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(1);
    const [onInterv, setOnInterv] = useState([]);
    const [time, setTime] = useState({ s: 0, m: 0, h: 0 });

    const start = () => {
        run();
        setStatus(1)
        setInterv(setInterval(run, 1000));
    };

    let updateS = time.s, updateM = time.m, updateH = time.h;

    const run = () => {
        if (updateM === 59) {
            if (updateS === 59) {
                updateM = -1
                updateH++;
            } else {
                updateM = updateM;
            }
        }
        if (updateS === 59) {
            updateS = -1;
            updateM++;
        }
        updateS++;
        return setTime({ s: updateS, m: updateM, h: updateH });
    }

    const stop = () => {
        clearInterval(interv);
        setStatus(1);
    };

    const interval = () => {
        setOnInterv([...onInterv, time]);
    };

    const reset = () => {
        clearInterval(interv);
        setStatus(1);
        setTime({ s: 0, m: 0, h: 0 })
        setOnInterv([])
    };


    return (
        <div className="container">
            <Counter time={time} setTime={setTime} />
            <div className="main-section">
                <div className="clock-holder">
                    <div className="card-header">StopWatch</div>
                    <div className="stopwatch">
                        <DisplayComponents time={time} />
                        <BtnDisplayComponents status={status} interval={interval} reset={reset} stop={stop} start={start} />
                    </div>

                    <div className="interval">
                        {
                            onInterv.map(({ s, m, h }) => {
                                return (
                                    <div key={s}>
                                        <span>{h}</span>:
                                        <span>{m}</span>:
                                        <span>{s}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StopWatch
