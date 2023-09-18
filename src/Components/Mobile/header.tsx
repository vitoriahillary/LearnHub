import { MenuMobile } from "./collapseBar";


export function Header(){
    return(
        <div className="flex flex-row gap-6 px-5 py-5 bg-zinc-800 justify-between items-center border-b">
            <div className="flex gap-4 items-center">
                <img src="/logo.png" alt="logo image" className="w-10 rounded-full" />
                <strong className="text-zinc-100 text-2xl"> Learnhub </strong>
            </div>
            <MenuMobile/>
        </div>
    )
}