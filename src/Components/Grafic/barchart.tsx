'use client'

import dynamic from "next/dynamic";

const ApexChart = dynamic(
    () => import('react-apexcharts'),
    { ssr: false }
)

function BarChart() {
    const options = {
        chart: {
            id: 'apexchart-example',
            padding: 50
        },
        labels: ['Ativos', 'Desativos'],
        plotOptions: {
            bar: {
                borderRadius: 3,
                horizontal: true,
            }
        },
        colors: ['#9333ea']
    };
    const series = [{
        name: 'series-1',
        data: [30, 40]
    }]

    return (
        <>
            <ApexChart type="bar" options={options} series={series} className=' flex-col px-2 py-3 justify-center mb-2 h- w-' />
        </>
    )
}

export function Chart() {
    return (
        <>
            <div className="bg-zinc-600 p-2 rounded-md border-zinc-200 flex flex-col flex-1 mt-8 max-w-xl">
                <strong className="text-zinc-100 font-medium">Bar Grafic</strong>
                    <BarChart />
            </div>
        </>
    )
}