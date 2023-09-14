import { CircleDollarSign, Gem, Shapes, Star } from "lucide-react"


function BoxWrapper({ children }: any) {
    return <div className="bg-zinc-700 rounded-md p-3 flex-1 border border-gray-200 flex items-center">{children}</div>
}

export function StatsGrid() {
    return (
        <>
            <div className="flex gap-4 w-full pt-5 ">
                <BoxWrapper>
                    <div className="rounded-full h-10 w-10 flex items-center justify-center bg-purple-500">
                        <Shapes className="text-zinc-100" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-zinc-200 font-light">Total de alunos ativos</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-zinc-100 font-semibold">400</strong>
                            <span className="text-sm text-green-500 pl-2">+205</span>
                        </div>
                    </div>
                </BoxWrapper>
                <BoxWrapper>
                    <div className="rounded-full h-10 w-10 flex items-center justify-center bg-purple-500">
                        <Star className="text-zinc-100" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-zinc-200 font-light">Total de avaliações</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-zinc-100 font-semibold">230</strong>
                            <span className="text-sm text-green-500 pl-2">+55</span>
                        </div>
                    </div>
                </BoxWrapper>
                <BoxWrapper>
                    <div className="rounded-full h-10 w-10 flex items-center justify-center bg-purple-500">
                        <CircleDollarSign className="text-zinc-100" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-zinc-200 font-light">Total de compras</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-zinc-100 font-semibold">540</strong>
                            <span className="text-sm text-green-500 pl-2">+295</span>
                        </div>
                    </div>
                </BoxWrapper>
                <BoxWrapper>
                    <div className="rounded-full h-10 w-10 flex items-center justify-center bg-purple-500">
                        <Gem className="text-zinc-100" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-zinc-200 font-light">Total de testes concluidos</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-zinc-100 font-semibold">125</strong>
                            <span className="text-sm text-green-500 pl-2">+35</span>
                        </div>
                    </div>
                </BoxWrapper>
            </div>
        </>
    )
}