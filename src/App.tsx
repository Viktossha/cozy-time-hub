import {Stopwatch} from "@/features/stopwatch/Stopwatch.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/shared/components/Tabs.tsx";
import {Countdown} from "@/features/countdown/Countdown.tsx";

function App() {
    return <div className={'relative'}>
        <div className={'fixed inset-0 bg-linear-to-br from-[#050a15] via-[#0a1628] to-[#0d1a2d]'}></div>
        <div className={'fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(103,232,249,0.03)_0%,transparent_70%)]'}></div>
        {/*<Header/>*/}
        <main className={'flex-col items-center justify-center flex flex-1'}>
            <div className={'relative w-full max-w-5xl'}>
                <div className="absolute -inset-4 bg-linear-to-r from-cyan-500/20 via-violet-500/10 to-cyan-500/20
                            rounded-4xl blur-2xl opacity-50"></div>

                <div
                    className={'relative px-6 py-8 shadow-[0_32px_64px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] p-10 bg-white/3 backdrop-blur-2xl rounded-2xl  border border-white/10'}>
                    <div
                        className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-cyan-400/50 to-transparent"></div>
                    <div
                        className="absolute top-0 left-0 w-24 h-24 bg-cyan-400/10 rounded-full blur-2xl-translate-x-1/2 -translate-y-1/2"></div>
                    <div
                        className="absolute bottom-0 right-0 w-24 h-24 bg-violet-400/10 rounded-full blur-2xl translate-x-1/2 translate-y-1/2"></div>
                    <Tabs defaultValue="countdown" className="">
                        <TabsList>
                            <TabsTrigger value="countdown">Countdown</TabsTrigger>
                            <TabsTrigger value="stopwatch">Stopwatch</TabsTrigger>
                            <TabsTrigger value="clock">Clock</TabsTrigger>
                            <TabsTrigger value="pomodoro">Pomodoro</TabsTrigger>
                        </TabsList>
                        <TabsContent value="countdown">
                            <Countdown/>
                        </TabsContent>
                        <TabsContent value="stopwatch">
                            <Stopwatch/>
                        </TabsContent>
                    </Tabs>
                    <div className="absolute bottom-0 left-8 right-8 bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
                </div>
            </div>
        </main>

        {/*<Footer/>*/}
    </div>


}

export default App
