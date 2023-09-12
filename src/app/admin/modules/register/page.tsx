'use client'
import * as Input from "@/Components/Input"
import * as Fileinput from "@/Components/Form/Fileinput"
import { DollarSign } from "lucide-react"
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { api } from "@/services/api";

export default function Register() {
    // const router = useRouter();
    // const { id } = router.query
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [course, setCourse] = useState('');

    const module = {
        name,
        description,
        course,
        id_staff: '0e849a14-75ed-4b2b-a7e0-c7415af6caa1'
    }

    // const handleCadastro = (event: FormEvent) => {
    //     event.preventDefault()

    //     api.post(`/module/`, module)
    //         .then(() => toast.success("Account created successfully!"))
    //         .catch(() => toast.error("Unable to create account, please try again!"))
    // };

    return (
        <>
            <div className="flex gap-2 justify-between">
                <div>
                    <h1 className="flex text-zinc-50 text-3xl font-medium">Cadastro</h1>
                </div>
                <div className="flex items-center justify-end gap-2 pt-5">
                    <button
                        className="rounded-lg px-4 py-2 
                          text-sm font-semibold shadow-sm 
                          border border-zinc-300 hover:bg-zinc-700
                          text-white"
                        type="button">
                        Cancelar
                    </button>
                    <button className="rounded-lg px-4 py-2 
                                text-sm font-semibold shadow-sm 
                                bg-violet-600 text-white hover:bg-violet-700"
                        type="submit"
                        form="formUser">
                        Confirmar
                    </button>
                </div>
            </div>
            <div className="mt-6 flex flex-col">
                <div className="flex justify-between items-center border-b border-zinc-50 pb-5">
                    <div>
                        <h1 className="text-lg text-zinc-50 font-medium">Cadastrar um novo modulo</h1>
                        <h3 className="text-sm text-zinc-300">Crie um novo modulo para um curso aqui</h3>
                    </div>
                </div>

                <form id="formUser" className="flex flex-col mt-6 w-full gap-5 divide-y divide-zinc-50">
                    <div className="grid grid-cols-form gap-3">
                        <label htmlFor="name" className="text-zinc-50 font-sm font-medium">Name:</label>
                        <div className="flex gap-3">
                            <Input.Root>
                                <Input.Controll id='name' defaultValue={'nome do modulo'} />
                            </Input.Root>
                        </div>
                    </div>
                    <div className="grid grid-cols-form gap-3 pt-5">
                        <label htmlFor="description" className="text-zinc-50 font-sm font-medium">Descriçao:</label>
                        <textarea className="bg-zinc-700 h-24 flex flex-1 flex-col gap-3 rounded-lg border border-zinc-300 px-3 py-2 
                        text-zinc-100 shadow-sm">
                        </textarea>
                    </div>
                    <div className="grid grid-cols-form gap-3 pt-5">
                        <label htmlFor="curso" className="text-zinc-50 font-sm font-medium">Curso:</label>
                        <div className="flex gap-3">
                            <Input.Root>
                                <Input.Controll id='curso' defaultValue={'vincular curso'} />
                            </Input.Root>
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-2 pt-5">
                        <button
                            className="rounded-lg px-4 py-2 
                          text-sm font-semibold shadow-sm 
                          border border-zinc-300 hover:bg-zinc-700
                          text-white"
                            type="button">
                            Cancelar
                        </button>
                        <button className="rounded-lg px-4 py-2 
                                text-sm font-semibold shadow-sm 
                                bg-violet-600 text-white hover:bg-violet-700"
                            type="submit"
                            form="formUser">
                            Confirmar
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}