import {useRef, useState} from "react";
import {Button} from "@/shared/components/Button.tsx";
import {Modal} from "@/shared/components/Modal.tsx";
import {Input} from "@/shared/components/Input.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/shared/components/Tabs.tsx";

export const Timer = () => {
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

    const intervalId = useRef<undefined | number>(undefined)



    const onStartHandler = () => {
        if (intervalId.current !== undefined) return

        intervalId.current = setInterval(() => {
            setTime(prevState => {
                if (prevState <= 1) {
                    setIsRunning(false)
                    clearInterval(intervalId.current)
                    return 0
                }
                return prevState - 1
            })
        }, 1000)

        setIsRunning(true)
    }

    const onSetTimerSettings = () => {
        setTime(inputHoursValue * 3600 + inputMinutesValue * 60 + inputSecondsValue)
    }

    const onResetHandler = () => {
        clearInterval(intervalId.current)
        setTime(0)
    }

    return (
        <div
            className={'border  bg-linear-to-r from-cyan-500/20 via-violet-500/10 to-cyan-500/20 rounded-md mt-15 flex flex-col items-center p-4'}>
            <h3>Таймер</h3>
            <div className={'flex gap-10'}>
                <div>
                    <div className={'bg-white/5 backdrop-blur-md border rounded-md text-center'}>{days}</div>
                    <span>days</span>
                </div>
                <div>
                    <div className={'bg-white/5 backdrop-blur-md border rounded-md text-center'}>{hours}</div>
                    <span>hours</span>
                </div>
                <div>
                    <div className={'bg-white/5 backdrop-blur-md border rounded-md text-center'}>{minutes}</div>
                    <span>minutes</span>
                </div>
                <div>
                    <div className={'bg-white/5 backdrop-blur-md border rounded-md text-center'}>{seconds}</div>
                    <span>seconds</span>
                </div>
            </div>

            <div className={'flex gap-10'}>

                {isRunning && time !== 0 && <Button onClick={onResetHandler}>Reset</Button>}

                {time !== 0 && !isRunning && <Button onClick={onStartHandler}>Start</Button>}

                <Button onClick={() => {
                    setShowSettings(true)
                }}>Set Timer</Button>
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
                            <Input className="flex-1" label={'Hours'} type={'number'} max={99} min={0} value={inputHoursValue} onValueChange={(value) => setInputHoursValue(+value)}/>
                            <Input className="flex-1" label={'Minutes'} type={'number'} max={59} min={0}  value={inputMinutesValue}  onValueChange={(value) => setInputMinutesValue(+value)}/>
                            <Input className="flex-1" label={'Seconds'} type={'number'} max={59} min={0}  value={inputSecondsValue}  onValueChange={(value) => setInputSecondsValue(+value)}/>
                        </div></TabsContent>
                    <TabsContent value="targetDate"> <p className={'uppercase text-sm text-white/40 font-medium mb-2'}>Target Date & Time</p>
                        <Input type="datetime-local"/></TabsContent>
                </Tabs>


            </Modal>


        </div>
    );
};