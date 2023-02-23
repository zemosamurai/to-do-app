import React, {ChangeEvent, useState} from 'react';

type EditableSpanPropsType = {
    title: string
    changeTitle: (title: string) => void
    changeIsActive?: () => void
}

export const EditableSpan = ({title, changeTitle, changeIsActive}: EditableSpanPropsType) => {
    const [value, setValue] = useState(title)
    const [editMode, setEditMode] = useState(false)

    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onEditMode = () => {
        setEditMode(true)
    }

    const onViewMode = () => {
        changeTitle(value)
        setEditMode(false)
    }



    return editMode
        ? <input value={value} onChange={onChangeTitle} onBlur={onViewMode} autoFocus/>
        : <span
            onDoubleClick={onEditMode}
            onClick={changeIsActive}
        >{title}</span>
}
