import React, {useState} from "react";

const BottomRow = props => {
    
    return(
        <div className="bottom-row">
            <div className="inning">
                <h3 className="inning-title">Inning</h3>
                <p className="inning-value">{props.inning}</p>
            </div>
            <div className="balls">
                <h4 className="balls-title">Balls</h4>
                <p className="balls-value">{props.balls}</p>
            </div>
            <div className="strikes">
                <h4 className="strikes-title">Strikes</h4>
                <p className="strikes-value">{props.strikes}</p>
            </div>
            <div className="outs">
                <h4 className="outs-title">Outs</h4>
                <p className="outs-value">{props.outs}</p>
            </div>
        </div>
    )
}

export default BottomRow;