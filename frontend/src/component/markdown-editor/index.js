import {useState} from "react"
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'

import 'katex/dist/katex.min.css'


function Block({index, value, onChange, blocks, onEnter}) {
    const [editMode, changeMode] = useState(false)


    const endEdit = (value) => {
        changeMode(false)
    }


    const changeBlock = (i, e) => {
        const blocksCopy = [...blocks]
        blocksCopy[i] = e
        onChange(index, {value, blocks: blocksCopy})
    }

    const addNewLine = (index) => {
        const blocksCopy = [...blocks]
        blocksCopy.splice(index + 1, 0, {
            value: '',
            blocks: []
        })
        onChange(index, {value, blocks: blocksCopy})
    }


    const onKeyUp = e => {
        if (e.key === 'Enter') {
            endEdit(e.target.value)
            onEnter(index)
        }
    }

    return <div className="flex flex-col" onClick={e => {
        changeMode(true)
        e.stopPropagation()
    }}>
        <div className="flex gap-3 items-center p-1">
            <i className="inline-block w-1 h-1 bg-neutral-500 rounded-full"></i>
            <div className="w-full">
                {editMode ? <textarea
                    className="w-full p-1"
                    rows={value.split('\n').length}
                    onBlur={() => changeMode(false)}
                    autoFocus
                    onKeyUp={onKeyUp} value={value}
                    onChange={e => onChange(index, {
                        value: e.target.value, blocks
                    })}/> : <ReactMarkdown
                    className="w-full hover:bg-neutral-100 rounded-md p-1"
                    remarkPlugins={[remarkMath, remarkGfm]}
                    rehypePlugins={[rehypeKatex]}
                >{value}</ReactMarkdown>}
            </div>
        </div>
        <div className="ml-6">
            {blocks && blocks.map((it, i) => <Block index={i} key={i} {...it} onChange={changeBlock}
                                                    onEnter={() => addNewLine(i)}/>)}
        </div>
    </div>
}

export default function MarkdownEditor({value, onChange}) {
    const [pageName, setPageName] = useState("Welcome")

    const changeBlock = (i, e) => {
        const copy = [...value]
        copy[i] = e
        onChange(copy)
    }

    const addNewLine = (index) => {
        // const blocksCopy = [...blocks]
        // blocksCopy.splice(index, 0, {
        //     value: '',
        //     blocks: []
        // })
        // onChange(index, {value, blocks: blocksCopy})
    }

    return <div className="container  mb-80">
        <h1 className="text-4xl py-6 hover:bg-neutral-200 px-2 rounded-md">{pageName}</h1>
        {value && value.map && value.map((it, i) => <Block key={i} index={i} {...it}
                                                           onEnter={addNewLine}
                                                           onChange={changeBlock}/>)}
    </div>
}
