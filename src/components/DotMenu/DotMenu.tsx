import {ReactComponent as IconOption} from "../../assets/images/optionIcon.svg";
import React from "react";
import styled from "styled-components";

type DotMenuPropsType = {
    onClickHandler: () => void
}

const DotMenuWrapper = styled(IconOption)`
      fill: green;
      :hover {
        fill: red;
      }
`

export const DotMenu = ({onClickHandler}: DotMenuPropsType) => {
    return <DotMenuWrapper width={20} height={20}>x</DotMenuWrapper>
}