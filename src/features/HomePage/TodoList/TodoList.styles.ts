import styled from "styled-components";
import {FlexContainer} from "../../../assets/styles/components";

export const TodoGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(15vh, 15vh);
  grid-template-rows: 40px;
  width: 25%;
  height: 100vh;
`

export const TodoGridItem = styled.div<GridItemProps>`
  border-bottom: 1px solid #E8ECEE;
  border-right: ${({borderRight}) => borderRight && '1px solid #E8ECEE'};
  padding: 0 20px;
  background-color: ${({bg}) => bg ? '#F6F8F9' : '#fff'};
`

export const TodoWrapper = styled(FlexContainer)`
  width: 100%;
  height: 100%;
`


//types
type GridItemProps = {
    bg?: boolean
    borderRight?: boolean
}