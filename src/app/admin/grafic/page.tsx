'use client'

import { ExampleChart } from '@/Components/Grafic/charts'

export default function Grafic() {


    return (
        <>
            <div>
                <h1 className="flex text-zinc-50 text-3xl font-medium">Estatisticas</h1>
            </div>
            <div>
            <h1 className="text-lg text-zinc-50 font-medium pt-5">Informações Gráficas</h1>
            <h3 className="text-sm text-zinc-300">Analise os dados de andamento dos cursos</h3>
          </div>
            <div className="flex gap-2 justify-between">
                <ExampleChart />
            </div>
        </>
    )
}