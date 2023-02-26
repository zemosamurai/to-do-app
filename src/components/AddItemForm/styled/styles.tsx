import styled from "styled-components";
import {FlexContainer, SuperText} from "../../../styles/components";

export const AddItemFormWrapper = styled(FlexContainer)`
  width: 300px;
`

export const AddItemInput = styled.input`
  width: 100%;
  margin: 20px auto;
  height: 40px;
  padding: 0 20px;
`

export const ButtonAddItem = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: ${p => p.theme.colors.bgPrimary};
  color: ${p => p.theme.colors.fontPrimary};
  font-size: 14px;
  transition: 0.3s;

  :hover {
    color: ${p => p.theme.colors.fontWhite};
    background-color: ${p => p.theme.colors.primary}
  }

  :disabled {
    color: #bbbbbb
  }

  :disabled:hover {
    background: none;
    color: #bbbbbb;
  }
`

export const TitleAddItem = styled(SuperText)`
  margin: 0 auto;
  font-weight: 700;
`