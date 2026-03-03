import type {ComponentPropsWithoutRef, ReactNode} from "react";
import {cn} from "@/shared/lib/cn.ts";

type Props = {
    hoverScale?: boolean
    icon?: ReactNode
} & ComponentPropsWithoutRef<'button'>

export const Button = ({hoverScale = true, icon, className, children, ...rest}: Props) => {
    return (
        <button {...rest} className={cn('rounded-xl bg-cyan-500/20 backdrop-blur-xl border-cyan-400/30 hover:bg-cyan-500/30 text-cyan-200 active:scale-95 border transition-all duration-300 px-6 py-3', {'hover:scale-105': hoverScale, 'flex items-center justify-center gap-2': icon}, className)}>
            {icon}
            {children}
        </button>
    );
};