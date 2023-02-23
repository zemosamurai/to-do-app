import React, {KeyboardEvent, useState} from 'react';

type AddItemForm = {
    addItem: (title: string) => void
}

export const AddItemForm = ({addItem}: AddItemForm) => {
    const [value, setValue] = useState<string>('')
    const [error, setError] = useState(false)

    const onAddItem = () => {
        if (value.trim() !== '') {
            addItem(value.trim())
            setValue('')
        } else {
            setError(true)
        }
    }

    const onEnterAddItem = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onAddItem()
        } else {
            error && setError(false)
        }

    }

    return (
        <div>
            <input value={value} onChange={(e) => setValue(e.currentTarget.value)} onKeyDown={onEnterAddItem}/>
            <button onClick={onAddItem} >+</button>
            {error && <div>Error</div>}
        </div>
    )
}
