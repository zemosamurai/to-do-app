import styled from "styled-components";

type FlexContainerType = {
    direction?: string
    align?: string
    justify?: string
    margin?: number
    rowGap?: string
    columnGap?: string
}

export const FlexContainer = styled.div<FlexContainerType>`
  display: flex;
  flex-direction: ${p => p.direction || 'row'};
  align-items: ${p => p.align || 'stretch'};
  justify-content: ${p => p.justify || 'stretch'};
  margin: ${p => p.margin || 0};
  row-gap: ${p => p.rowGap || 0};
  column-gap: ${p => p.columnGap || 0};
`

export const Title1 = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 25px;
  font-weight: 500;

`

export const Title2 = styled.h2`
  font-size: 20px;
  font-weight: 400;
`

export const Title3 = styled.h3`
  font-size: 18px;
  font-weight: 500;
`

export const SuperText = styled.p`
  font-size: 14px;
  color: #6F7782;
`

export const Button = styled.button`
  padding: 8px 10px;
  background-color: blue;
  border: none;
  border-radius: 5px;

  :hover {
    background: rgba(0, 0, 0, 0);
    color: blue;
    box-shadow: inset 0 0 0 3px blue
  }
`
