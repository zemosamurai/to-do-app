import styled from "styled-components";
import {FlexContainer, SuperText} from "../../../styles/components";

export const LoginWrapper = styled(FlexContainer)`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
`

export const LoginContentWrapper = styled(FlexContainer)`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 20px;
  border-radius: 12px;
  background-color: white;
`

export const LoginInput = styled.input`
  width: 300px;
  height: 35px;
  padding: 0 10px;
`

export const LoginTitle = styled(SuperText)`
  font-weight: 700;
  margin: 0 auto;
`