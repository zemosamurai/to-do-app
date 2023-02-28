import React from 'react';
import styled from "styled-components";
import {ReactComponent as IconOption} from "../../assets/images/optionIcon.svg";

const TodoDotMenu = styled(IconOption)<{ rotate?: number, fill?: string }>`
  padding: 5px;
  border-radius: 50%;
  transform: ${p => `rotate(${p.rotate}deg)` || '90deg'};
  fill: ${p => p.fill || 'black'};

  :hover {
    fill: ${p => p.fill || 'black'};
    background: rgba(131, 101, 157, 0.22);
  }
`

type DotMenuPropsType = {
    openModal: () => void
    rotate?: number
    fill?: string
}

export const DotMenu = ({openModal, rotate, fill}: DotMenuPropsType) => {
    return <TodoDotMenu
        onClick={openModal}
        fill={fill}
        width={30}
        height={30}
        rotate={rotate}/>
};


