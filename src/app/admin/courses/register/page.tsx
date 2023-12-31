'use client'

import * as Input from "@/Components/Input"
import * as Fileinput from "@/Components/Form/Fileinput"
import { DollarSign } from "lucide-react"
import { FormEvent, useState } from "react";
import { api } from "@/services/api";
import toast, { Toaster } from "react-hot-toast";

type Course ={
    id: string,
    name: string,
    description: string,
    rating: number,
    qtdeRating: number,
    image: string,
    price: number,
    id_staff: string,
    status: number
}

export default function Register() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<FileList | null >();
    const [price, setPrice] = useState(0);
    const [courseCreated, setCourseCreated] = useState<Course>()

    const course = {
        name,
        description,
        price,
        id_staff: '30a09edb-d291-4c5e-b9d7-76c43310d9d6'
    }
    console.log(course)

    const handleCadastro = async (event: FormEvent) => {

        event.preventDefault()

        api.post("/course", course)
            .then((res) => {
                setCourseCreated(res.data)

                console.log(res.data.id)
                const formData: FormData | null = new FormData
                formData.append('course', image![0])
                api.post(`/course/image/${res.data.id}`, formData)
                    .then((res) => {
                        setCourseCreated(res.data)
                        toast.success("Account created successfully!")
                    })
                    .catch(() => toast.error("Unable to create course, please try again!"))
            })
            .catch(() => toast.error("Unable to create course, please try again!"))
    };
    console.log(courseCreated)
    
    return (
        <>
        <Toaster/>
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
                        <h1 className="text-lg text-zinc-50 font-medium">Cadastrar um novo curso</h1>
                        <h3 className="text-sm text-zinc-300">Crie um novo curso para a plataforma aqui</h3>
                    </div>
                </div>

                <form id="formUser" className="flex flex-col mt-6 w-full gap-5 divide-y divide-zinc-50">
                    <div className="grid grid-cols-form gap-3">
                        <label htmlFor="name" className="text-zinc-50 font-sm font-medium">Name:</label>
                        <div className="flex gap-3">
                            <Input.Root>
                                <Input.Controll id='name' defaultValue={'nome do curso'}  onChange={(e) => setName(e.target.value)}/>
                            </Input.Root>
                        </div>
                    </div>
                    <div className="grid grid-cols-form gap-3 pt-5">
                        <label htmlFor="description" className="text-zinc-50 font-sm font-medium">Descriçao:</label>
                        <textarea 
                            className="bg-zinc-700 h-24 flex flex-1 flex-col gap-3 rounded-lg border border-zinc-300 px-3 py-2 
                                       text-zinc-100 shadow-sm"
                            onChange={(e) => setDescription(e.target.value)}>
                        </textarea>
                    </div>
                    <div className="grid grid-cols-form gap-3 pt-5">
                        <label htmlFor="photo"
                            className="font-sm font-medium text-zinc-100"
                        >
                            Foto do Curso
                        </label>
                        <Fileinput.Root className="flex items-star gap-5">
                            <Fileinput.Trigger />
                            <Fileinput.Control onChange={(e) => {
                                console.log(e)
                                setImage(e.target.files)}}/>
                        </Fileinput.Root>
                    </div>
                    <div className="grid grid-cols-form gap-3 pt-5">
                        <label htmlFor="preco" className="text-zinc-50 font-sm font-medium">Preço:</label>
                        <div className="flex gap-3">
                            <Input.Root>
                                <Input.Prefix>
                                    <DollarSign className="text-zinc-100 w-5 h-5" />
                                </Input.Prefix>
                                <Input.Controll id='preco' defaultValue={''}  onChange={(e) => setPrice(parseFloat(e.target.value))}/>
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
                                form="formUser"
                                onClick={handleCadastro}
                        >
                            Confirmar
                        </button>

                    </div>
                </form>
            </div>
        </>
    )
}