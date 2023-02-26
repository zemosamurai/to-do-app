import styled from "styled-components";

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
  font-size: 20px;
  font-weight: 700;
  color: ${p => p.theme.colors.primary}
`

export const Title2 = styled.h2`
  font-size: 20px;
  font-weight: 400;
`

export const Title3 = styled.h3`
  font-size: 18px;
  font-weight: 500;
`

export const SuperText = styled.p<SuperTextPropsType>`
  font-size: ${p => p.size || '14px'};
  color: ${p => p.color || p.theme.colors.fontSecondary};
  font-weight: ${p => p.weight || 400};
`

export const Button = styled.button<ButtonPropsType>`
  padding: 8px 10px;
  background-color: ${p => p.bg || 'blue'};
  border: none;
  border-radius: 5px;
  margin: ${p => p.margin || 0};
  font-weight: 600;
  color: ${p => p.color || '#fff'};
  transition: 0.3s;

  :hover {
    background: rgba(0, 0, 0, 0);
    color: ${p => p.bg || 'blue'};
    box-shadow: ${p => `inset 0 0 0 3px ${p.bg || 'blue'}`}
  }
`


//types
type FlexContainerType = {
    direction?: string
    align?: string
    justify?: string
    margin?: string
    rowGap?: string
    columnGap?: string
}

type ButtonPropsType = {
    color?: string
    bg?: string
    margin?: string
}

type SuperTextPropsType = {
    size?: string,
    color?: string,
    weight?: number
}

