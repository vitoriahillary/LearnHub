'use client'

import * as SelectPrimitive from "@radix-ui/react-select"

import { Check, ChevronDown } from "lucide-react"

export interface SelectProps{}

export function Select( props: SelectProps){
    return(
        <SelectPrimitive.Root>
            <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between text-zinc-100 gap-2 rounded-lg border
                                                 bg-zinc-700 border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-100">
                <SelectPrimitive.Value
                    placeholder="Selecione..."
                    className="text-zinc-100"
                    color="white"
                />
                <SelectPrimitive.Icon>
                    <ChevronDown className="h-5 w-5 text-zinc-100"/>
                </SelectPrimitive.Icon>                                        
            </SelectPrimitive.Trigger>   
            <SelectPrimitive.Portal>
                <SelectPrimitive.Content 
                    side="bottom"
                    position="popper"
                    sideOffset={8}
                    className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-violet-100"
                >
                    <SelectPrimitive.Viewport>
                        <SelectPrimitive.Item
                            value="adm"
                            className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[placeholder]:text-zinc-50 hover:bg-zinc-300"
                        >
                            <SelectPrimitive.ItemText className="text-zinc-100">
                                Administrador
                            </SelectPrimitive.ItemText>
                            <SelectPrimitive.ItemIndicator>
                                <Check className="h-4 w-4 text-violet-500 "/>
                            </SelectPrimitive.ItemIndicator>
                        </SelectPrimitive.Item>
                        <SelectPrimitive.Item
                            value="staff"
                            className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[placeholder]:text-zinc-50 hover:bg-zinc-300">
                            <SelectPrimitive.ItemText>
                                Teacher    
                            </SelectPrimitive.ItemText>
                            <SelectPrimitive.ItemIndicator>
                                <Check className="h-4 w-4 text-violet-500"/>    
                            </SelectPrimitive.ItemIndicator>        
                        </SelectPrimitive.Item>
                    </SelectPrimitive.Viewport>
                </SelectPrimitive.Content>
            </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
    )
}