import { LogOut } from "lucide-react";

export function Profile() {
    return(
        <div className="grid grid-cols-profile items-center gap-3">
            <img
                src="https://github.com/vitoriahillary.png"
                className="h-10 w-10 rounded-full"
                alt=""
            />
            <div className="flex flex-1 flex-col truncate">
                <span className="text-sm font-semibold text-zinc-50"> Vitoria Hillary Alarcon </span>
                <span className="text-sm text-zinc-100 truncate"> vitoriahalarcon@learnhub.com </span>
            </div>
            <button type="button" className="group ml-auto p-2 hover:bg-violet-800 rounded-md">
                <LogOut className="w-5 h-5 text-zinc-500 group-hover:text-zinc-100"/>
            </button>
        </div>
    )
}