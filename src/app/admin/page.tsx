'use client'

export default function Admin() {
    return (
        <>
            <div className="flex flex-row gap-4">
                <button className="rounded-lg px-4 py-2 
                                text-sm font-semibold shadow-sm 
                                bg-violet-600 text-white hover:bg-violet-700"
                        onClick={() => window.open("/admin/grafic", "_self")}
                >
                    Estastisticas
                </button>
                <button className="rounded-lg px-4 py-2 
                                text-sm font-semibold shadow-sm 
                                bg-violet-600 text-white hover:bg-violet-700"
                        onClick={() => window.open("/admin/courses", "_self")}
                >
                    Cursos
                </button>
                <button className="rounded-lg px-4 py-2 
                                text-sm font-semibold shadow-sm 
                                bg-violet-600 text-white hover:bg-violet-700"
                        onClick={() => window.open("/admin/modules", "_self")}
                >
                    Modulos
                </button>
            </div>
        </>
    )
}