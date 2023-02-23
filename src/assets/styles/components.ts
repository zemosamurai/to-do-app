import styled from "styled-components";

type FlexContainerType = {
    direction?: string
    align?: string
    justify?: string
    margin?: number
}

export const FlexContainer = styled.div<FlexContainerType>`
  display: flex;
  flex-direction: ${p => p.direction || 'row'};
  align-items: ${p => p.align || 'stretch'};
  justify-content: ${p => p.justify || 'stretch'};
  margin: ${p => p.margin || 0};
`

export const Title1 = styled.h1`

`

export const Title2 = styled.h2`
  font-size: 20px;
  font-weight: 400;
`

export const Title3 = styled.h3`
  font-size: 18px;
  font-weight: 500;
`

export const Text = styled.p`
  font-size: 14px;
  color: #6F7782;
`



