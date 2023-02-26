import styled from "styled-components";
import {FlexContainer} from "../../../../styles/components";

export const TaskGridContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr 2fr 2fr 1fr;
  grid-auto-rows: minmax(15vh, 15vh);
  grid-template-rows: 40px 70px;
  width: 75%;
  height: 100vh;
`

export const TaskGridItem = styled.div<GridItemProps>`
  border-bottom: 0.5px solid #E8ECEE;
  padding-left: ${p => p.paddingLeft || 'none'};
  background-color: ${p => p.bg ? p.theme.colors.bgSecondary : p.theme.colors.bgPrimary};
`

export const AddTask = styled(FlexContainer)`
  border-bottom: 1px solid #E8ECEE;
  grid-column-start: 1;
  grid-column-end: 6;
`


//types

type GridItemProps = {
    bg?: boolean
    paddingLeft?: string
}