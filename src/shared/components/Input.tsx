import type {ChangeEvent, ComponentPropsWithRef} from "react";
import {cn} from "@/shared/lib/cn.ts";

type Props = {
    label?: string
    onValueChange?: (value: string) => void
} & ComponentPropsWithRef<'input'>
export const Input = ({label, className, value, onValueChange, onChange, ...rest}: Props) => {

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        if (onValueChange) {
            onValueChange(e.currentTarget.value)
        }
        if (onChange) {
            onChange(e)
        }
    }

    return (
        <div className={'flex flex-col w-full'}>
            {label && <label className={'font-medium text-white/40 text-xs'} htmlFor={rest.id}>{label}</label>}
            <input id={rest.id} {...rest} value={value} onChange={handleChangeInput}
                   className={cn('px-3 py-1 text-center w-full rounded-md border bg-white/5 border-white/10 backdrop-blur-xl' +
                       'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus:ring-cyan-400/20  focus:border-cyan-400/50', className)}/>
        </div>
    )
};