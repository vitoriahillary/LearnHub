'use client'

import { ComponentProps, createContext, useContext, useId, useState } from "react"

export type RootProps = ComponentProps<'div'>

type FileInputContextType = {
    id: string,
    files: File[]
    onFileSelected: (files: File[]) => void
}

const fileInputContext = createContext({} as FileInputContextType)

export function Root(props: RootProps){
    const [files, setFiles] = useState<File[]>([])

    const id = useId()
    return(
        <fileInputContext.Provider value={{id, files, onFileSelected: setFiles}}>
            <div {...props}/>
        </fileInputContext.Provider>
    )
}

export const useFileInput = () => useContext(fileInputContext)