import styled from "styled-components";
import {Button, FlexContainer, SuperText} from "../../../../../../styles/components";

export const FormTodoWrapper = styled(FlexContainer)`
  width: 300px;
  height: 180px;
`

export const TodoInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 20px;
  margin: 30px 0;
`

export const TodoTitle = styled(SuperText)`
  font-weight: 700;
  margin: 0 auto
`

export const SaveButton = styled(Button)`
  height: 40px;
`