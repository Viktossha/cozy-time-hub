import {useRef, useState} from "react";

export const Stopwatch = () => {
    let [time, setTime] = useState(0)
    let [isRunning, setIsRunning] = useState(false)

    let intervalId = useRef<undefined | number>(undefined)

    let seconds = time % 60
    let minutes = Math.floor(time / 60) % 60
    let hours = Math.floor(time / 3600) % 24
    let days =  Math.floor(time / 86400)


    const onStartHandler = () => {
        if (intervalId.current !== undefined) return

        intervalId.current = setInterval(() => {
            setTime(prevState => prevState + 1)
        }, 1000)

        setIsRunning(true)
    }

    const onPauseHandler = () => {
        if (intervalId.current !== undefined) {
            clearInterval(intervalId.current)
            intervalId.current = undefined
            setIsRunning(false)
        }
    }

    const onResetHandler = () => {
        clearInterval(intervalId.current)
        setTime(0)
    }


    return (
        <div className={'border bg-blue-300 rounded-md mt-15 flex flex-col items-center p-4'}>
            <div className={'flex gap-10'}>
                <div>
                    <div className={'bg-blue-500 border rounded-md text-center'}>{days}</div>
                    <span>days</span>
                </div>
                <div>
                    <div className={'bg-blue-500 border rounded-md text-center'}>{hours}</div>
                    <span>hours</span>
                </div>
                <div>
                    <div className={'bg-blue-500 border rounded-md text-center'}>{minutes}</div>
                    <span>minutes</span>
                </div>
                <div>
                    <div className={'bg-blue-500 border rounded-md text-center'}>{seconds}</div>
                    <span>seconds</span>
                </div>
            </div>

            <div className={'flex gap-10'}>
                {isRunning ?
                    <button onClick={onPauseHandler}>pause</button>
                    : <button onClick={onStartHandler}>start</button>}

                {time !== 0 && <button onClick={onResetHandler}>reset</button>}
            </div>
        </div>
    )
};