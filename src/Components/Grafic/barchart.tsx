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
            with: 100
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
            <ApexChart type="bar" options={options} series={series} className=' flex-col px-2 py-3 justify-center h-72 w-72' />
        </>
    )
}

export function Chart() {
    return (
        <>
            <div className="h-[14rem] bg-zinc-600 p-2 rounded-md border-zinc-200 flex flex-col flex-1 mt-8">
                <strong className="text-zinc-100 font-medium">Bar Grafic</strong>
                <div className="">
                    <BarChart />
                </div>
            </div>
        </>
    )
}