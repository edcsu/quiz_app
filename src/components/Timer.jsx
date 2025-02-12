import { useEffect, useState } from 'react'
function Timer({timeout, onTimeOut}) {
    const [timeLeft, setTimeLeft] = useState(timeout)
    
    useEffect(() => {
        const timer = setTimeout(() => {
            onTimeOut()
        }, timeout);
    }, [timeout, onTimeOut])
    
    useEffect(() => {
        setInterval(() => {
            setTimeLeft(prevTime => prevTime - 100)
        }, 100);
    }, [])
    

    return (
        <progress id="question-time" value={timeLeft} max={timeout} />
    )
}

export default Timer