import React, {useState} from "react";

const BottomRow = props => {
    
    return(
        <div className="bottom-row">
            <div className="inning">
                <h3 className="inning-title">Inning</h3>
                <div className="inning-value">{props.inning}</div>
            </div>
            <div className="balls">
                <h3 className="balls-title">Balls</h3>
                <div className="balls-value">{props.balls}</div>
            </div>
            <div className="strikes">
                <h3 className="strikes-title">Strikes</h3>
                <div className="strikes-value">{props.strikes}</div>
            </div>
            <div className="outs">
                <h3 className="outs-title">Outs</h3>
                <div className="outs-value">{props.outs}</div>
            </div>
        </div>
    )
}

export default BottomRow;