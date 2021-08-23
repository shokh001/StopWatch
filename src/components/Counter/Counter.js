import React, { useEffect, useState } from 'react'

const Counter = ({ time, setTime }) => {
    const [counterH, setCounterH] = useState(time.h);
    const [counterM, setCounterM] = useState(time.m);
    const [counterS, setCounterS] = useState(time.s);

    const CounterH = (status) => {
        if (status === 'plus') {
            setCounterH(counterH + 1)

            if (counterH === 99) {
                setCounterH(0)
            }
        }
        if (status === 'minus') {
            if (counterH > 0) {
                setCounterH(counterH - 1)
            } else if (counterH === 0) {
                setCounterH(99)
            }
        }
    }

    const CounterM = (status) => {
        if (status === 'plus') {
            if (counterM <= 58) {
                setCounterM(counterM + 1)
            }

            if (counterM === 59) {
                setCounterM(0)
            }
        }
        if (status === 'minus') {
            if (counterM > 0) {
                setCounterM(counterM - 1)
            } else if (counterM === 0) {
                setCounterM(59)
            }
        }
    }

    const CounterS = (status) => {
        if (status === 'plus') {
            if (counterS <= 58) {
                setCounterS(counterS + 1)
            }

            if (counterS === 59) {
                setCounterS(0)
            }
        }
        if (status === 'minus') {
            if (counterS > 0) {
                setCounterS(counterS - 1)
            } else if (counterS === 0) {
                setCounterS(59)
            }
        }
    }

    useEffect(() => {
        setTime({ s: counterS, m: counterM, h: counterH })
    }, [counterH, counterM, counterS])

    useEffect(() => {
        setCounterH(time.h)
        setCounterS(time.s)
        setCounterM(time.m)
    }, [time])


    return (
        <div className="time-counter">
            <div className="title">
                <p>Hour</p>
                <div className="counter">
                    <button onClick={() => CounterH('plus')} className="button-plus">+</button>
                    <p>{counterH}</p>
                    <button onClick={() => CounterH('minus')} className="button-minus">-</button>
                </div>
            </div>
            <div className="title">
                <p>Minut</p>
                <div className="counter">
                    <button onClick={() => CounterM('plus')} className="button-plus">+</button>
                    <p>{counterM}</p>
                    <button onClick={() => CounterM('minus')} className="button-minus">-</button>
                </div>
            </div>
            <div className="title">
                <p>Sekund</p>
                <div className="counter">
                    <button onClick={() => CounterS('plus')} className="button-plus">+</button>
                    <p>{counterS}</p>
                    <button onClick={() => CounterS('minus')} className="button-minus">-</button>
                </div>
            </div>
        </div>
    )
}

export default Counter
