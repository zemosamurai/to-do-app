import React, {KeyboardEvent, useState} from 'react';
import {Button} from "../../styles/components";
import {ModalTodo} from "../ModalTodo/ModalTodo";
import {AddItemFormWrapper, AddItemInput, ButtonAddItem, TitleAddItem} from "./styled/styles";
import {theme} from "../../styles/theme";

type AddItemForm = {
    title: string
    addItem: (title: string) => void
    disabled?: boolean
}


export const AddItemForm = ({addItem, title, disabled}: AddItemForm) => {
    const [value, setValue] = useState<string>('')
    const [error, setError] = useState(false)
    const [modalActive, setModalActive] = useState(false)

    const onAddItem = () => {
        if (value.trim() !== '') {
            addItem(value.trim())
            setValue('')
            setModalActive(false)
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

    const closeModal = () => setModalActive(false)
    const openModal = () => setModalActive(true)

    return (
        <>
            <ButtonAddItem disabled={disabled} onClick={openModal}>
                + {title}
            </ButtonAddItem>
            <div>
                {modalActive && <ModalTodo active={modalActive} setActive={closeModal}>
                    <AddItemFormWrapper direction={'column'}>
                        <TitleAddItem size={'20px'} color={theme.colors.fontPrimary}>Add {title}</TitleAddItem>

                        <AddItemInput
                            value={value}
                            onChange={(e) => setValue(e.currentTarget.value)}
                            onKeyDown={onEnterAddItem}
                            placeholder={'Title'}
                        />

                        <Button bg={theme.colors.primary} onClick={onAddItem}>Add</Button>
                        {error && <div>Error</div>}
                    </AddItemFormWrapper>
                </ModalTodo>}
            </div>
        </>

    )
}
