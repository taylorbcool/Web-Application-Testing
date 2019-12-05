import React, {useState} from "react";

const Dashboard = props => {

    return (
        <div className='buttons'>
        <section className="score-buttons">
            <div className="homeButtons">
                <button className="homeButton-score" onClick={props.handleScoreHome}>Home Score</button>
                <button className="homeButton-hit" onClick={props.handleHitHome}>Home Hit</button>
                <button className="homeButton-error" onClick={props.handleErrorHome}>Home Error</button>
            </div>
            <div className="awayButtons">
                <button className="awayButton-score" onClick={props.handleScoreAway}>Away Score</button>
                <button className="awayButton-hit" onClick={props.handleHitAway}>Away Hit</button>
                <button className="awayButton-error" onClick={props.handleErrorAway}>Away Error</button>
            </div>
        </section>
        <section className='other-buttons'>
            <div className='inning-button'>
                <button className='inning' onClick={props.handleInning}>Inning</button>
                <button className='inning-reset' onClick={props.resetInning}>Reset Inning</button>
            </div>
            <div className='count-buttons'>
                <button className='ball-button' onClick={props.handleBalls}>Ball</button>
                <button className='strike-button' onClick={props.handleStrikes}>Strike</button>
                <button className='foul-button' onClick={props.handleFoul}>Foul</button>
                <button className='out-button' onClick={props.handleOuts}>Out</button>
            </div>
        </section>
        </div>
    );
};

export default Dashboard;
