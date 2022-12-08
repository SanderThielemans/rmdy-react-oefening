import React from 'react'
import { Container, Controls } from './Interval.styles';


const Interval: React.FC = () => {
    const [seconds, setSeconds] = React.useState(0);
    const [paused, setPaused] = React.useState(false);
    
    const resetTimer = () => {
        setPaused(true);
        setSeconds(0);
    }

    React.useEffect(() => {
        let interval: NodeJS.Timer;

        if (!paused) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        }

        return () => {
            clearInterval(interval);
        }
    }, [paused]);

    return (
        <Container>
            <p style={{textAlign: 'center'}}>{seconds} seconds passed</p>
            <Controls>
                <button onClick={() => setPaused(false)}>Start</button>
                <button onClick={() => setPaused(true)}>Pauze</button>
                <button onClick={() => resetTimer()}>Stop</button>
            </Controls>
        </Container>

    )
}


export default Interval;