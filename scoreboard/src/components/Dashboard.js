import React, {useState} from "react";

const Dashboard = props => {

    return (
        <div className='buttons'>
        <section className="score-buttons">
            <div className="homeButtons">
                <button className="homeButton-score" /*onClick={props.handleScore('home')} */>Home Score</button>
                <button className="homeButton-hit" /*onClick={props.handleHit('home')} */>Home Hits</button>
            </div>
            <div className="awayButtons">
                <button className="awayButton-score" /*onClick={props.handleScore('away')}*/>Away Score</button>
                <button className="awayButton-hit" /*onClick={props.handleScore('away')}*/>Away Hits</button>
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
