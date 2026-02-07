import {useState} from "react";
import {cn} from "@/shared/lib/cn.ts";
import {Button} from "@/shared/components/Button.tsx";
import {Modal} from "@/shared/components/Modal.tsx";
import {Input} from "@/shared/components/Input.tsx";

export const Timer = () => {
    const [showSettings, setShowSettings] = useState(false)
    const [activeTab, setActiveTab] = useState<'duration' | 'targetDate'>('duration')

    return (
        <div
            className={'border  bg-linear-to-r from-cyan-500/20 via-violet-500/10 to-cyan-500/20 rounded-md mt-15 flex flex-col items-center p-4'}>
            <h3>Таймер</h3>
            <div className={'flex gap-10'}>
                <div>
                    <div className={'bg-white/5 backdrop-blur-md border rounded-md text-center'}>{0}</div>
                    <span>days</span>
                </div>
                <div>
                    <div className={'bg-white/5 backdrop-blur-md border rounded-md text-center'}>{0}</div>
                    <span>hours</span>
                </div>
                <div>
                    <div className={'bg-white/5 backdrop-blur-md border rounded-md text-center'}>{0}</div>
                    <span>minutes</span>
                </div>
                <div>
                    <div className={'bg-white/5 backdrop-blur-md border rounded-md text-center'}>{0}</div>
                    <span>seconds</span>
                </div>
            </div>

            <div className={'flex gap-10'}>

                <Button onClick={() => {
                    setShowSettings(true)
                }}>setTimer</Button>
            </div>

            <Modal open={showSettings} onOpenChange={setShowSettings} title={'Set Timer'} closeText={'Set'}
                   className={'max-w-[448px]'}>
                <div className={'flex gap-1.5 p-1 bg-white/5 rounded-xl mt-4 mb-6'}>
                    <Button hoverScale={false} className={cn('bg-transparent  bg-linear-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-400/30 w-full transition-all duration-200 hover:bg-white/5 ', {'bg-none border-none text-white/40': activeTab !== 'duration'})} onClick={() => setActiveTab('duration')}>Duration</Button>
                    <Button hoverScale={false} className={cn('bg-transparent  bg-linear-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-400/30 w-full transition-all duration-200 hover:bg-white/5', {'bg-none border-none text-white/40': activeTab !== 'targetDate'})}  onClick={() => setActiveTab('targetDate')}>Target Date</Button>
                </div>

                {activeTab === 'duration' && <>
                    <p className={'uppercase text-sm text-white/40 font-medium mb-2'}>Set
                    duration</p>
                    <div className={'flex w-full gap-4'}>
                        <Input className="flex-1" label={'Hours'} type={'number'} max={23} min={0}/>
                        <Input className="flex-1" label={'Minutes'} type={'number'} max={59} min={0}/>
                        <Input className="flex-1" label={'Seconds'} type={'number'} max={59} min={0}/>
                    </div>
                </>}

                {activeTab === 'targetDate' && <>
                    <p className={'uppercase text-sm text-white/40 font-medium mb-2'}>Target Date & Time</p>
                    <Input type="datetime-local"/>
                </>}


            </Modal>
        </div>
    );
};