import classnames from "classnames"
import {
    AcademicCapIcon, Cog8ToothIcon,
    HomeIcon,
    MagnifyingGlassIcon,
    MoonIcon,
    QuestionMarkCircleIcon
} from "@heroicons/react/24/solid"
import {Bars4Icon, CalendarDaysIcon, DocumentDuplicateIcon, SparklesIcon} from "@heroicons/react/24/outline"

function ToolbarButton({icon, active}) {
    const Icon = icon
    const activeKlass = active ? "bg-neutral-100" : "hover:bg-neutral-100"
    return <Icon className={classnames("h-7 p-1 rounded cursor-pointer", activeKlass)}/>

}

export default function Toolbar() {
    const klass = classnames("sticky top-0", "bg-neutral-50 flex gap-3 px-6 py-2 items-center", "transition transition-colors duration-500", "border-b border-transparent hover:border-neutral-100")
    return <div className={klass}>
        <AcademicCapIcon className="h-8"/>
        <div className="pr-3 flex flex-col space-around border-r">
            <strong>Zaniyar</strong>
            <small className="font-xs">Knowledge base</small>
        </div>


        <ToolbarButton active={true} icon={Bars4Icon}/>
        <ToolbarButton icon={CalendarDaysIcon}/>
        <ToolbarButton icon={DocumentDuplicateIcon}/>
        <ToolbarButton icon={SparklesIcon}/>
        <button className="flex items-center border font-xs border-neutral-200 hover:bg-neutral-200 rounded-md">
            <MagnifyingGlassIcon className="h-4 m-2"/>
            <span className="pr-3">Find or create page</span>
        </button>
        <span className="flex-1"/>
        <ToolbarButton icon={QuestionMarkCircleIcon}/>
        <ToolbarButton icon={HomeIcon}/>
        <ToolbarButton icon={MoonIcon}/>
        <ToolbarButton icon={Cog8ToothIcon}/>
    </div>
}