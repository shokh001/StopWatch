import React from 'react'

const BtnDisplayComponents = (props) => {
    return (
        <div >
            {(props.status === 1) ?
                <>
                    <button className="stopwatch-btn stopwatch-btn-blue" onClick={props.start}>Start</button>
                    <button className="stopwatch-btn stopwatch-btn-red" onClick={props.stop}>Stop</button>
                    <button className="stopwatch-btn stopwatch-btn-gre" onClick={props.interval}>Interval</button>
                    <button className="stopwatch-btn stopwatch-btn-yel" onClick={props.reset}>Reset</button>
                </>
                : ""
            }
        </div>
    )
}

export default BtnDisplayComponents
