'use client'

import { Chart } from '@/Components/Grafic/barchart'
import { ExampleChart } from '@/Components/Grafic/charts'
import { PizzaChart } from '@/Components/Grafic/pizzachart'
import { StatsGrid } from '@/Components/Grafic/statsgrid'

export default function Grafic() {


    return (
        <>
        <div className=''>

            <div>
                <h1 className="flex text-zinc-50 text-3xl font-medium">Estatisticas</h1>
            </div>
            <div>
                <h1 className="text-lg text-zinc-50 font-medium pt-5">Informações Gráficas</h1>
                <h3 className="text-sm text-zinc-300">Analise os dados de andamento dos cursos</h3>
            </div>
            <div>
                <StatsGrid />
            </div>
            <div className='flex flex-row justify-center'>
                <h2 className="flex text-zinc-50 text-3xl font-medium pt-5">Cursos</h2>
            </div>
            <div className="flex gap-2 justify-center">
                <ExampleChart />
            </div>
            <div className='flex flex-row gap-4'>

                <PizzaChart />
                <Chart />
            </div>
        </div>
        </>
    )
}