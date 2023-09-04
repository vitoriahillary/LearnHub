'use client'

import { ChangeEvent, ComponentProps } from "react"
import { useFileInput } from "./Root"

export type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps){
    const { id, onFileSelected } = useFileInput()

    function handleFileSelected(e: ChangeEvent<HTMLInputElement>){
        if(!e.target.files?.length){
            return
        }

        const files = Array.from(e.target.files)
        onFileSelected(files)
    }
    
    return(
        <input 
         type="file" 
         className="sr-only" 
         id={id}
         onChange={handleFileSelected} 
         {...props}/>
    )
}