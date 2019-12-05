import React, {useState} from "react";
import BottomRow from './BottomRow';
import Dashboard from "./Dashboard";

const Display = () => {
    const [inning, setInning] = useState(1)
    const [balls, setBalls] = useState(0)
    const [strikes, setStrikes] = useState(0)
    const [outs, setOuts] = useState(0)
    const [homeScore, setHomeScore] = useState(0);
    const [homeHits, setHomeHits] = useState(0);
    const [awayScore, setAwayScore] = useState(0);
    const [awayHits, setAwayHits] = useState(0);

    const handleInning = () => {
        setInning(inning + 1)
        resetCount()
        setOuts(0)
    }
    const resetInning = () => {
        setInning(1) 
    }
    const handleBalls = () => {
        balls < 3 ? setBalls(balls + 1) : setBalls(0)
    }
    const handleStrikes = () => {
        strikes < 2 ? setStrikes(strikes + 1) : setStrikes(0)
    }
    const resetCount = () => {
        setStrikes(0);
        setBalls(0);
    }
    const handleFoul = () => {
        strikes < 2 ? setStrikes(strikes + 1) : null
    }
    const handleOuts = () => {
        outs < 2 ? setOuts(outs + 1) : setOuts(0)
        resetCount()
    }
    // const handleScore = team => {
    //     team = 'home' ? setHomeScore(homeScore + 1) : null
    //     team = 'away' ? setAwayScore(awayScore + 1) : null
    // }
    // const handleHit = team => {
    //     team = 'home' ? setHomeHits(homeHits + 1) : null
    //     team = 'away' ? setAwayHits(awayHits + 1) : null
    // }

    return (
        <div className="container">
        <section className="scoreboard">
            <div className="topRow">
                <div className="home">
                    <h2 className="home-name">Home</h2>
                    <div className="home-score">
                        <h4>Score</h4>
                        <p>{homeScore}</p>
                    </div>
                    <div className="home-hits">
                        <h4>Hits</h4>
                        <p>{homeHits}</p>
                    </div>
                </div>
                <div className="away">
                    <h2 className="away-name">Away</h2>
                    <div className="away-score">
                        <h4>Score</h4>
                        <p>{awayScore}</p>
                    </div>
                    <div className="away-hits">
                        <h4>Hits</h4>
                        <p>{awayHits}</p>
                    </div>
                </div>
            </div>
            <BottomRow 
                inning={inning}
                balls={balls}
                strikes={strikes}
                outs={outs}
            />
            <Dashboard 
                //handleScore={handleScore}
                //handleHit={handleHit}
                handleOuts={handleOuts}
                handleStrikes={handleStrikes}
                handleFoul={handleFoul}
                handleBalls={handleBalls}
                resetInning={resetInning}
                handleInning={handleInning}
            />
        </section>
        </div>
    );
}

export default Display;