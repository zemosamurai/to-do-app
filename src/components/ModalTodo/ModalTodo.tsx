import React, {MouseEvent} from 'react';
import styled from "styled-components";
import {FlexContainer} from "../../styles/components";


const Modal = styled(FlexContainer)<{ active: boolean }>`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
  opacity: ${p => p.active ? 1 : 0};
  pointer-events: ${p => p.active ? 'all' : 'none'};
  transition: 0.4s;
`
const ModalContent = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  transform: ${p => p.active ? 'scale(1)' : 'scale(0.5)'};
  transition: 0.3s;
`


type ModalTodo = {
    active: boolean
    setActive: (modalActive: boolean) => void
    children: React.ReactNode
}

export const ModalTodo = ({active, setActive, children}: ModalTodo) => {

    const onSetActive = () => setActive(false)

    const contentHandler = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    return (
        <Modal justify={'center'} align={'center'} onClick={onSetActive} active={active}>
            <ModalContent onClick={contentHandler} active={active}>
                {children}
            </ModalContent>
        </Modal>
    );
}
