'use client'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Book, FileEdit, Folder, Folders, Home, Menu, Square, SquareStack, Users } from 'lucide-react'
import './style.css'

export function MenuMobile() {
    return (
        <Collapsible.Root className='absolute top-2 right-0'>
            <Collapsible.Trigger className='absolute top-3 right-4'>
                <Menu className='text-zinc-100 w-8 h-8' />
            </Collapsible.Trigger>
            <Collapsible.Content className='CollapsibleContent bg-zinc-700 border-l-2 border-b-2 rounded-sm px-1 py-2 shadow-md mt-12 z-10'>
                <Collapsible.Trigger className='flex flex-row gap-2 p-2'>
                    <Home className='text-zinc-100'/>
                    <button className='text-zinc-100 '>Home</button>
                </Collapsible.Trigger>
                <Collapsible.Trigger className='flex flex-row gap-2 p-2'>
                    <Folders className='text-zinc-100'/>
                    <button className='text-zinc-100'>Cursos</button>
                </Collapsible.Trigger>
                <Collapsible.Trigger className='flex flex-row gap-2 p-2'>
                    <SquareStack className='text-zinc-100'/>
                    <button className='text-zinc-100'>Modulos</button>
                </Collapsible.Trigger>
                <Collapsible.Trigger className='flex flex-row gap-2 p-2'>
                    <Book className='text-zinc-100'/>
                    <button className='text-zinc-100'>Aulas</button>
                </Collapsible.Trigger>
                <Collapsible.Trigger className='flex flex-row gap-2 p-2'>
                    <FileEdit className='text-zinc-100'/>
                    <button className='text-zinc-100'>Provas</button>
                </Collapsible.Trigger>
                <Collapsible.Trigger className='flex flex-row gap-2 p-2'>
                    <Users className='text-zinc-100'/>
                    <button className='text-zinc-100'>Users</button>
                </Collapsible.Trigger>
            </Collapsible.Content>
        </Collapsible.Root>
    )
}