import {useRef, useState} from "react";
import {Button} from "@/shared/components/Button.tsx";
import {Pause, Play, TimerReset} from "lucide-react";

export const Stopwatch = () => {
    let [time, setTime] = useState(0)
    let [isRunning, setIsRunning] = useState(false)

    let intervalId = useRef<undefined | number>(undefined)

    let seconds = time % 60
    let minutes = Math.floor(time / 60) % 60
    let hours = Math.floor(time / 3600) % 24
    let days = Math.floor(time / 86400)


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
        <div
            className={'mt-15 flex flex-col items-center p-4 gap-10'}>
            {/*<div*/}
            {/*    className={' bg-white/3 backdrop-blur-2xl rounded-2xl border border-white/10'}>*/}
                <div className={'flex gap-10'}>
                    <div>
                        <div className={'bg-white/5 backdrop-blur-md border rounded-md text-center'}>{days}</div>
                        <span>days</span>
                    </div>
                    <div>
                        <div className={'bg-white/5 backdrop-blur-md  border rounded-md text-center'}>{hours}</div>
                        <span>hours</span>
                    </div>
                    <div>
                        <div className={'bg-white/5 backdrop-blur-md  border rounded-md text-center'}>{minutes}</div>
                        <span>minutes</span>
                    </div>
                    <div>
                        <div className={'bg-white/5 backdrop-blur-md  border rounded-md text-center'}>{seconds}</div>
                        <span>seconds</span>
                    </div>
                </div>

                <div className={'flex gap-10'}>
                    {isRunning ?
                        <Button onClick={onPauseHandler} icon={<Pause size={16}/>}>Pause</Button>
                        : <Button onClick={onStartHandler} className={'flex items-center justify-center gap-2'} icon={<Play size={16}/>}>Start</Button>}

                    {time !== 0 && <Button onClick={onResetHandler} icon={<TimerReset size={16}/>}>Reset</Button>}
                </div>
            {/*</div>*/}

        </div>
    )
};