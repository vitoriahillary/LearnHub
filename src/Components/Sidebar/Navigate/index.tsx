import { Book, FileEdit, Folders, Home, SquareStack, Users } from "lucide-react";
import { NavItem } from "./Navitem";

export function MainNavigation() {
    return(
        <nav className="space-y-0.5">
            <NavItem title="Home" icon={Home}/>
            <NavItem title="Cursos" icon={Folders}/>
            <NavItem title="Modulos" icon={SquareStack}/>
            <NavItem title="Aulas" icon={Book}/>
            <NavItem title="Provas" icon={FileEdit}/>
            <NavItem title="Users" icon={Users}/>
        </nav>
    )
}