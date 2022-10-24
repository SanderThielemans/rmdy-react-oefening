import React from 'react'


const Interval: React.FC = () => {

    const [seconds, setSeconds] = React.useState(0);

    const secondsCounter = () => {
        //Add 1 second every second
    }

    React.useEffect(() => {
        //Initiate interval


    }, [])
    return (
        <p style={{textAlign: 'center'}}>{seconds} seconds passed</p>
    )
}


export default Interval;