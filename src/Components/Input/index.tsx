'use client'

import { Search } from "lucide-react"
import { ComponentProps } from "react"

type InputPrefixProps = ComponentProps<'div'>

export function Prefix(props: InputPrefixProps) {
    return (
        <div {...props}/>
    )
}

type InputControllProps = ComponentProps<'input'>

export function Controll(props: InputControllProps){
    return(
        <input className="flex-1 border-0 bg-transparent p-0 text-zinc-50 placeholder-zinc-200 border-none outline-none" 
        {...props}/>
    )
}

export type InputRootProps = ComponentProps<'div'>

export function Root(props: InputRootProps) {
    return (
        <div className="flex mx-1 w-full items-center gap-2 rounded-lg border border-zinc-100 px-3 py-2 shadow-sm" 
        {...props} />
    )
}

