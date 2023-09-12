'use client'
import { useState } from "react";
import { Search, Home, ChevronDown, BarChart2, SquareStack, CheckSquare, Flag, Users } from "lucide-react";

import * as Input from "../Input"
import { MainNavigation } from "./Navigate";
import { Profile } from "./Profile";

export function Sidebar() {
    const [InputValue, setInputValue] = useState('')
    return (
        <div className="flex flex-col gap-6 border-r border-r-zinc-100 px-5 py-5 bg-zinc-800">
            <div className="flex gap-4 items-center">
                <img src="/logo.png" alt="logo image" className="w-14 rounded-full" />
                <strong className="text-zinc-100 text-4xl"> Learnhub </strong>
            </div>

            <Input.Root>
                <Input.Prefix>
                    <Search className="text-zinc-100 w-5 h-5" />
                </Input.Prefix>
                <Input.Controll value={InputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Digite aqui..' />
            </Input.Root>

            <MainNavigation/>

            <div className="mt-auto">
                <div className="h-px bg-zinc-200 mb-6"/>
                <Profile/>
            </div>
        </div>
    )
}