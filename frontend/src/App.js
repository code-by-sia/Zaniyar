import Toolbar from "./component/toolbar"
import MarkdownEditor from "./component/markdown-editor"
import {useEffect, useState} from "react"
import Persistence from "./service/persistence"
import {MOCK} from "./mock"

export function App() {
    const [journal, setJournal] = useState()
    useEffect(()=>{
        Persistence
            .load("journal", MOCK)
            .then(setJournal)
    },[])

    const update = contents => {
        setJournal(contents)
        Persistence.save('journal', contents)
    }

    return <div className="flex flex-col w-full h-screen bg-neutral-50">
        <Toolbar/>
        <div className="flex-1 flex flex-col items-center">
            <MarkdownEditor value={journal} onChange={update}/>
        </div>
    </div>
}