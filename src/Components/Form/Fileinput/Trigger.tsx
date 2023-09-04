'use client'

import { UploadCloud } from "lucide-react";
import { useFileInput } from "./Root";

export function Trigger(){
    const { id } = useFileInput()
    return(
        <label htmlFor={id} 
               className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 
                          text-center text-zinc-100 shadow-sm hover:border-violet-300 hover:bg-violet-300 hover:text-violet-700">
                <div className="rounded-full bg-zinc-100 p-2 group-hover:bg-violet-700">
                  <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-violet-100" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-sm">
                    <span className="font-semibold text-violet-700">
                      Click here to upload
                    </span> {''}
                    or drag and drop
                  </span>
                  <span>
                    SVG, PNG, JPG ou GIF(max. 800x400px)
                  </span>
                </div>
              </label>
    )
}