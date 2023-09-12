'use client' 

import dynamic from "next/dynamic";
const ApexChart = dynamic(
    () => import('react-apexcharts'),
    { ssr: false }
)

export function ExampleChart() {

    const option = {
        chart: {
            id: 'apexchart-example',
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
    }

const series = [{
    name: "Alunos",
    data: [
        {
            x: "02-10-2017 GMT",
            y: 34
        },
        {
            x: "02-11-2017 GMT",
            y: 43
        },
        {
            x: "02-12-2017 GMT",
            y: 31
        },
        {
            x: "02-13-2017 GMT",
            y: 43
        },
        {
            x: "02-14-2017 GMT",
            y: 33
        },
        {
            x: "02-15-2017 GMT",
            y: 52
        }
    ]
}, {
    name: "Cursos",
    data: [
        {
            x: "02-10-2017 GMT",
            y: 30
        },
        {
            x: "02-11-2017 GMT",
            y: 40
        },
        {
            x: "02-12-2017 GMT",
            y: 35
        },
        {
            x: "02-13-2017 GMT",
            y: 45
        },
        {
            x: "02-14-2017 GMT",
            y: 30
        },
        {
            x: "02-15-2017 GMT",
            y: 52
        }
    ]
}]


return (
    <>
        <ApexChart type="area" options={option} series={series} className='h-72 w-full' />
    </>
)
    
}