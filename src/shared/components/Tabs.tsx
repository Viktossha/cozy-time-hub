import * as TabsPrimitive from '@radix-ui/react-tabs';
import type {TabsProps, TabsListProps, TabsTriggerProps, TabsContentProps} from '@radix-ui/react-tabs';
import {cn} from "@/shared/lib/cn.ts";

const Tabs = ({...props}: TabsProps) => {
    return (
        <TabsPrimitive.Root {...props}/>
    )
}

const TabsList = ({className, ...props}: TabsListProps) => {
    return (
        <TabsPrimitive.List className={cn('flex gap-1.5 p-1 bg-white/5 rounded-xl mt-4 mb-6', className)} {...props}/>
    )
}

const TabsTrigger = ({className, ...props}: TabsTriggerProps) => {
    return (
        <TabsPrimitive.Trigger className={cn('cursor-pointer  text-cyan-200 rounded-xl px-6 py-3 bg-transparent  bg-linear-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-400/30 w-full transition-all duration-200 hover:bg-white/5 ' + 'data-[state=inactive]:bg-none data-[state=inactive]:border-none data-[state=inactive]:text-white/40', className)} {...props}/>
    )
}

const TabsContent = ({className, ...props}: TabsContentProps) => {
    return (
        <TabsPrimitive.Content className={cn('', className)} {...props}/>
    )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }