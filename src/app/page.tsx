import { SeattingsTab } from "@/Components/SeattingsTab";
import * as Input from "@/Components/Input"
import { Mail, UploadCloud, User } from "lucide-react";

import * as Fileinput from "@/Components/Form/Fileinput"

import { Select } from "@/Components/Form/Select";

export default function Home() {
  return (
    <>
      <h1 className="text-zinc-50 text-3xl font-medium">Usuários</h1>

      <SeattingsTab />

      <div className="mt-6 flex flex-col">
        <div className="flex justify-between items-center border-b border-zinc-50 pb-5">
          <div>
            <h1 className="text-lg text-zinc-50 font-medium">Informações Pessoais</h1>
            <h3 className="text-sm text-zinc-300">Atualize a sua foto e as suas informações pessoais aqui</h3>
          </div>
          <div className="flex gap-2">
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

        <form id="formUser" className="flex flex-col mt-6 w-full gap-5 divide-y divide-zinc-50">
          <div className="grid grid-cols-form gap-3">
            <label htmlFor="firstname" className="text-zinc-50 font-sm font-medium">Name:</label>
            <div className="flex gap-3">
              <Input.Root>
                <Input.Controll id='firstName' defaultValue={'Vitoria'} />
              </Input.Root>
              <Input.Root>
                <Input.Controll id='lastName' defaultValue={'Hillary'} />
              </Input.Root>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="firstname" className="text-zinc-50 font-sm font-medium">Email:</label>
            <Input.Root>
              <Input.Prefix>
                <Mail className='text-zinc-50' />
              </Input.Prefix>
              <Input.Controll id='email' defaultValue={'@learnhub.com'} />
            </Input.Root>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="photo"
              className="font-sm font-medium text-zinc-100"
            >
              Sua foto
              <span className="mt-0.5 block text-sm font-normal text-zinc-100">
                Sua foto de perfil será mostrada aqui
              </span>
            </label>
            <Fileinput.Root className="flex items-star gap-5">
              <Fileinput.ImagePreview />
              <Fileinput.Trigger />
              <Fileinput.Control />
            </Fileinput.Root>
            <div className="flex items-start gap-5">

            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role"
              className="text-sm font-medium text-zinc-100"
            >
              Cargo
            </label>
            <Select/>
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
