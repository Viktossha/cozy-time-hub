import {useRef, useState} from "react";
import {Button} from "@/shared/components/Button.tsx";
import {Modal} from "@/shared/components/Modal.tsx";
import {Input} from "@/shared/components/Input.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/shared/components/Tabs.tsx";
import {Play, Settings, TimerReset} from "lucide-react";
import {formatToTwoDigits} from "@/shared/utils/formatToTwoDigits.ts";

export const Countdown = () => {
    const [showSettings, setShowSettings] = useState(false)
    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)


    const [inputHoursValue, setInputHoursValue] = useState<number>(0)
    const [inputMinutesValue, setInputMinutesValue] = useState<number>(0)
    const [inputSecondsValue, setInputSecondsValue] = useState<number>(0)

    const seconds = time % 60
    const minutes = Math.floor(time / 60) % 60
    const hours = Math.floor(time / 3600) % 24
    const days = Math.floor(time / 86400)

    const timeParts = [days, hours, minutes, seconds]

    const intervalId = useRef<undefined | number>(undefined)


    const onStartHandler = () => {
        if (intervalId.current !== undefined) return

        intervalId.current = setInterval(() => {
            setTime(prevState => {
                if (prevState <= 1) {
                    setIsRunning(false)
                    clearInterval(intervalId.current)
                    intervalId.current = undefined
                    return 0
                }
                return prevState - 1
            })
        }, 1000)

        setIsRunning(true)
    }

    const onSetTimerSettings = () => {
        setTime(inputHoursValue * 3600 + inputMinutesValue * 60 + inputSecondsValue)
        setIsRunning(false)
        clearInterval(intervalId.current)
        intervalId.current = undefined
    }

    const onResetHandler = () => {
        clearInterval(intervalId.current)
        intervalId.current = undefined
        setTime(0)
        setIsRunning(false)
    }

    return (
        <div
            className={'mt-15 flex flex-col items-center p-4 gap-10'}>
            <div className={'flex gap-10'}>

                {timeParts.map((value, index) => (
                    <div className={'flex gap-1'} key={index}>
                        {formatToTwoDigits(value).map((digit, i) => <DigitBlock key={i} value={digit}/>)}
                    </div>
                ))}
            </div>

            <div className={'flex gap-10'}>

                {isRunning && time !== 0 &&
                    <Button onClick={onResetHandler} icon={<TimerReset size={16}/>}>Reset</Button>}

                {time !== 0 && !isRunning && <Button onClick={onStartHandler} icon={<Play size={16}/>}>Start</Button>}

                <Button onClick={() => {
                    setShowSettings(true)
                }} className={'flex items-center justify-center gap-2'} icon={<Settings size={16}/>}>
                    Set Timer
                </Button>
            </div>

            <Modal open={showSettings} onOpenChange={setShowSettings} title={'Set Timer'} closeText={'Set'}
                   className={'max-w-[448px]'} onCloseTextButton={onSetTimerSettings}>

                <Tabs defaultValue="duration" className="w-[400px]">
                    <TabsList>
                        <TabsTrigger value="duration">Duration</TabsTrigger>
                        <TabsTrigger value="targetDate">Target Date</TabsTrigger>
                    </TabsList>
                    <TabsContent value="duration"><p className={'uppercase text-sm text-white/40 font-medium mb-2'}>Set
                        duration</p>
                        <div className={'flex w-full gap-4'}>
                            <Input className="flex-1" label={'Hours'} type={'number'} max={99} min={0}
                                   value={inputHoursValue} onValueChange={(value) => setInputHoursValue(+value)}/>
                            <Input className="flex-1" label={'Minutes'} type={'number'} max={59} min={0}
                                   value={inputMinutesValue} onValueChange={(value) => setInputMinutesValue(+value)}/>
                            <Input className="flex-1" label={'Seconds'} type={'number'} max={59} min={0}
                                   value={inputSecondsValue} onValueChange={(value) => setInputSecondsValue(+value)}/>
                        </div>
                    </TabsContent>
                    <TabsContent value="targetDate"><p
                        className={'uppercase text-sm text-white/40 font-medium mb-2'}>Target Date & Time</p>
                        <Input type="datetime-local"/>
                    </TabsContent>
                </Tabs>


            </Modal>


        </div>
    );
};

const DigitBlock = ({value}: { value: any }) => {
    return <div
        className={'relative w-12 h-16 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden shadow-[0_0_30px_rgba(103,232,249,0.1),inset_0_1px_0_rgba(255,255,255,0.1)]'}>
        <div className={'absolute inset-0 bg-linear-to-b from-white/5 to-transparent'}></div>
        <span
            className={'absolute inset-0 flex items-center justify-center text-3xl font-light bg-linear-to-b from-white via-cyan-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(103,232,249,0.5)]'}>{value}</span>
        <div
            className={'absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-400/30 to-transparent'}></div>
    </div>
}