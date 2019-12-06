import React, {useState} from "react";

const Dashboard = props => {

    return (
        <div className='buttons'>
        <section className="score-buttons">
            <div className="homeButtons">
                <button className="homeButton-score btn" onClick={props.handleScoreHome}>Home Score</button>
                <button className="homeButton-hit btn" onClick={props.handleHitHome}>Home Hit</button>
                <button className="homeButton-error btn" onClick={props.handleErrorHome}>Home Error</button>
            </div>
            <div className="awayButtons">
                <button className="awayButton-score btn" onClick={props.handleScoreAway}>Away Score</button>
                <button className="awayButton-hit btn" onClick={props.handleHitAway}>Away Hit</button>
                <button className="awayButton-error btn" onClick={props.handleErrorAway}>Away Error</button>
            </div>
        </section>
        <section className='other-buttons'>
            <div className='inning-button'>
                <button className='inning btn' onClick={props.handleInning}>Inning</button>
                <button className='inning-reset btn' onClick={props.resetInning}>Reset Inning</button>
            </div>
            <div className='count-buttons'>
                <button className='ball-button btn' onClick={props.handleBalls}>Ball</button>
                <button className='strike-button btn' onClick={props.handleStrikes}>Strike</button>
                <button className='foul-button btn' onClick={props.handleFoul}>Foul</button>
                <button className='out-button btn' onClick={props.handleOuts}>Out</button>
            </div>
        </section>
        </div>
    );
};

export default Dashboard;
