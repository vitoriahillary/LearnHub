'use client'

import * as Input from "@/Components/Input"
import * as Table from "@/Components/Table"
import { useState } from "react"
import { Modulos } from "@/@arrays/index"
import { Pencil, Trash2 } from "lucide-react"

export default function Modules() {
    
    const [actualPage, setActualPage] = useState(1)
    const [itemsByPage, setItemsByPage] = useState(2)

    const changePage = (page: number) => {
        setActualPage(page)
    }

    const start = (actualPage - 1) * itemsByPage
    const end = start + itemsByPage

    const selectData = Modulos.slice(start, end)
    
    return (
        <>
            <div className="flex flex-row justify-between">

                <h1 className="flex text-zinc-50 text-3xl font-medium">Modules</h1>

                <button className="rounded-lg px-4 py-2 
                                text-sm font-semibold shadow-sm 
                                bg-violet-600 text-white hover:bg-violet-700"
                        type="submit"
                        form="formUser"
                        onClick={() => window.open("/admin/modules/register", "_self")}
                >
                    Cadastrar
                </button>
            </div>
            <div className="flex gap-6 mt-20">
                <div className="w-1/3">
                    <Input.Root>
                        <Input.Controll placeholder="Nome do Modulo" />
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
            <div className="px-5 mt-10">
                <Table.Tbl>
                    <Table.TableThead>
                        <Table.TableTr
                            headers={['Nome', 'Curso', 'Professor']}
                        />
                    </Table.TableThead>
                    <Table.TBody>
                        {selectData.map((item, index) => (
                            <Table.Tr key={index}>
                                <Table.Td> {item.name} </Table.Td>
                                <Table.Td> {item.course} </Table.Td>
                                <Table.Td> {item.staff} </Table.Td>
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
                        data={Modulos}
                        itemsByPage={itemsByPage}
                        showPage={changePage}
                        page={actualPage}
                    />
                </div>
            </div>
        </>
    )
}