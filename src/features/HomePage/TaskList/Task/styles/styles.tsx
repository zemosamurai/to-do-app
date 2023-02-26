import styled, {css, FlattenSimpleInterpolation} from "styled-components";
import {TaskPriorities} from "../../../../../api/todo-api";
import {SuperText} from "../../../../../styles/components";
import {FlexContainer} from "../../../../../styles/components";
import {TaskStatuses} from "../../../../../api/todo-api";
import {theme} from "../../../../../styles/theme";

export const StatusIndicator = styled.div<{ status: TaskStatuses }>`
  width: 6px;
  height: 6px;
  background-color: ${p => p.status === TaskStatuses.Completed ? p.theme.colors.success : p.theme.colors.warning};
  border-radius: 50%;
  margin-right: 10px;
`

export const TaskWrapper = styled(FlexContainer)`
  width: 100%;
  height: 100%;
  align-items: center;
`

export const PrioritiesEl = styled(SuperText)<{ priority: TaskPriorities }>`
  background-color: ${p => styledVariants[p.priority]};
  color: white;
  padding: 3px 15px 4px;
  border-radius: 30px;
`

const styledVariants: StyledVariants<TaskPriorities> = {
    [TaskPriorities.Low]: css`
      ${theme.colors.warning}
    `,
    [TaskPriorities.Medium]: css`
      ${theme.colors.secondary}
    `,
    [TaskPriorities.High]: css`
      ${theme.colors.primary}
    `
}


//types
type StyledVariants<E extends number> = {
    [key in E]?: FlattenSimpleInterpolation
}

