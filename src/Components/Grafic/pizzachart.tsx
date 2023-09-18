'use client'

import dynamic from "next/dynamic";

const ApexChart = dynamic(
    () => import('react-apexcharts'),
    { ssr: false }
)

function PieChart() {
    const options = {
        chart: {
            id: 'apexchart-example',
        },
        labels: ['Female', 'Male', 'Other'],
    };
    const series = [44, 55, 13]
    const labels = ['Female', 'Male', 'Other']

    return (
        <>
            <ApexChart type="pie" options={options} series={series} label={labels} className=' flex-col px-2 py-3 justify-center h- w-' />
        </>
    )
}

export function PizzaChart() {
    return (
        <>
            <div className="h- bg-zinc-600 p-2 rounded-md border-zinc-200 flex flex-col flex-1 mt-8">
                <strong className="text-zinc-100 font-medium">Publico Alvo</strong>
                <div className="">
                    <PieChart />
                </div>
            </div>
        </>
    )
}