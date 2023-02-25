import styled from "styled-components";

export const TaskGridContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr 2fr 2fr 1fr;
  grid-auto-rows: minmax(15vh, 15vh);
  grid-template-rows: 40px;
  width: 75%;
  height: 100vh;
`

export const TaskGridItem = styled.div<GridItemProps>`
  border-bottom: 1px solid #E8ECEE;
  padding-left: ${p => p.paddingLeft || 'none'};
  background-color: ${p => p.bg ? p.theme.colors.bgSecondary : p.theme.colors.bgPrimary};
`

//types

type GridItemProps = {
    bg?: boolean
    paddingLeft?: string
}