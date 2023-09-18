'use client'

import * as Input from "@/Components/Input"
import * as Table from "@/Components/Table"
import { Pencil, Trash2 } from "lucide-react"
import { useEffect, useState } from "react"
import { Cursos } from '@/@arrays/index'
import { api } from "@/services/api"

type Course = {
    id: string,
    name: string,
    description: string,
    image: string,
    price: number,
    rating: number,
    status: number
  }

export default function Courses() {

    const [course, setCourse] = useState<Course[]>([])

    // async function getCourses() {
    //     const response = await api.get('/courses')
    //     setCourse(response.data.courses)
    // }

    // useEffect(() => {
    //     getCourses()
    // }, [])

    const [actualPage, setActualPage] = useState(1)
    const [itemsByPage, setItemsByPage] = useState(2)

    const changePage = (page: number) => {
        setActualPage(page)
    }

    const start = (actualPage - 1) * itemsByPage
    const end = start + itemsByPage

    const course2 = Cursos.slice(start, end)

    return (
        <>
            <div className="flex flex-row justify-between">

                <h1 className="flex text-zinc-50 text-3xl font-medium">Cursos</h1>

                <button className="rounded-lg px-4 py-2 
                                text-sm font-semibold shadow-sm 
                                bg-violet-600 text-white hover:bg-violet-700"
                    type="submit"
                    form="formUser"
                    onClick={() => window.open("/admin/courses/register", "_self")}
                >
                    Cadastrar
                </button>
            </div>
            <div className="flex gap-6 mt-20">
                <div className="w-1/3">
                    <Input.Root>
                        <Input.Controll placeholder="Nome do curso" />
                    </Input.Root>

                </div>
                <button className="rounded-lg px-4 py-2 
                                text-sm font-semibold shadow-sm 
                                bg-violet-600 text-white hover:bg-violet-700"
                    type="submit"
                    form="formUser"
                >
                    Pesquisar
                </button>
            </div>
            <div className="px-5 mt-10 overflow-x-auto">
                <Table.Tbl>
                    <Table.TableThead>
                        <Table.TableTr
                            headers={['Nome', 'Avaliação', 'Valor']}
                        />
                    </Table.TableThead>
                    <Table.TBody>
                        {course2.map((item, index) => (
                            <Table.Tr key={index}>
                                <Table.Td> {item.name} </Table.Td>
                                <Table.Td> {item.rating} </Table.Td>
                                <Table.Td> {item.price} </Table.Td>
                                <Table.Td>
                                    <div className="flex flex-row gap-3 flex-1 justify-center">
                                        <button className="rounded p-1.5 hover:bg-zinc-600"><Pencil className="w-5 h-5 text-violet-400" /></button>
                                        <button className="p-1.5 rounded hover:bg-zinc-600"><Trash2 className="w-5 h-5 text-red-500" /></button>
                                    </div>
                                </Table.Td>
                            </Table.Tr>
                        ))}
                    </Table.TBody>
                </Table.Tbl>
                <div className="flex flex-1 justify-end">
                    <Table.PaginateIndicator
                        data={course}
                        itemsByPage={itemsByPage}
                        showPage={changePage}
                        page={actualPage}
                    />
                </div>
            </div>
        </>
    )
}