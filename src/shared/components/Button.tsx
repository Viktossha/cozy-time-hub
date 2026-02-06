import type {ComponentPropsWithoutRef} from "react";
import {cn} from "../lib/cn.ts";

type Props = ComponentPropsWithoutRef<'button'>

export const Button = ({className, children, ...rest}: Props) => {
    return (
        <button {...rest} className={cn('rounded-xl bg-cyan-500/20 backdrop-blur-xl border-cyan-400/30 hover:bg-cyan-500/30 text-cyan-200 hover:scale-105 active:scale-95 border transition-all duration-300 px-6 py-3', className)}>
            {children}
        </button>
    );
};