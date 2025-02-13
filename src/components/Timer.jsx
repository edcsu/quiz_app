import { useEffect, useState } from 'react'
function Timer({timeout, onTimeOut, mode}) {
    const [timeLeft, setTimeLeft] = useState(timeout)
    
    useEffect(() => {
        const timer = setTimeout(() => {
            onTimeOut()
        }, timeout);

        return () => clearTimeout(timer)
    }, [timeout, onTimeOut])
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 100)
        }, 100);

        return () => clearInterval(interval)
    }, [])
    

    return (
        <progress id="question-time" value={timeLeft} max={timeout} className={mode} />
    )
}

export default Timer