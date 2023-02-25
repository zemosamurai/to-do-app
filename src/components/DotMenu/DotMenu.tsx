import React from 'react';
import styled from "styled-components";
import {ReactComponent as IconOption} from "../../assets/images/optionIcon.svg";

const TodoDotMenu = styled(IconOption)<{rotate?: number}>`
  fill: black;
  padding: 5px;
  border-radius: 50%;
  transform: ${p => `rotate(${p.rotate}deg)` || '90deg'};

  :hover {
    fill: black;
    background: rgba(131, 101, 157, 0.22);
  }
`

type DotMenuPropsType = {
    openModal: () => void
    rotate?: number
}

export const DotMenu = ({openModal, rotate}: DotMenuPropsType) => {
    return <TodoDotMenu onClick={openModal} width={30} height={30} rotate={rotate}></TodoDotMenu>
};


