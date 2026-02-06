import * as Dialog from '@radix-ui/react-dialog';
import type {ReactNode} from "react";
import type {DialogProps} from '@radix-ui/react-dialog';
import {Button} from "./Button.tsx";

type Props = {
    title?: string
    description?: string
    closeText?: string
    children: ReactNode
} & DialogProps
export const Modal = ({open, onOpenChange, title, description, closeText, children, ...dialogProps}: Props) => {
    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange} {...dialogProps}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 data-[state=open]:animate-overlayShow"/>
                <Dialog.Content
                    className="bg-slate-900/90 backdrop-blur-2xl fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-xl p-[25px] border border-white/10 shadow-(--shadow-6) focus:outline-none data-[state=open]:animate-contentShow">
                    {title && <Dialog.Title className="m-0 text-lg font-medium">
                        {title}
                    </Dialog.Title>}
                    {description && <Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal">
                        {description}
                    </Dialog.Description>}
                    {children}
                    <Dialog.Close asChild
                                  className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-white/40 hover:text-white/80 cursor-pointer focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
                                  aria-label="Close">
                        <button>✕</button>
                    </Dialog.Close>
                    {closeText &&
                        <Dialog.Close asChild
                                      className="hover:bg-violet4 cursor-pointer focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none">
                            <Button>{closeText}</Button>
                        </Dialog.Close>}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};