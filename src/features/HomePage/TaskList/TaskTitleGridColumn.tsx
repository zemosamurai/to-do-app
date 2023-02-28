import React from 'react';
import {TaskGridItem, TaskGridItemTitle} from "./styles/styles";
import {SuperText} from "../../../styles/components";
import {TaskWrapper} from "./Task/styles/styles";

export const TaskTitleGridColumn = () => {
    return <>
        <TaskGridItemTitle  paddingLeft={'20px'}>
            <TaskWrapper>
                <SuperText>Status</SuperText>
            </TaskWrapper>
        </TaskGridItemTitle>

        <TaskGridItemTitle >
            <TaskWrapper>
                <SuperText>
                    Task Progress
                </SuperText>
            </TaskWrapper>
        </TaskGridItemTitle>

        <TaskGridItemTitle >
            <TaskWrapper>
                <SuperText>
                    Dates
                </SuperText>
            </TaskWrapper>
        </TaskGridItemTitle>

        <TaskGridItemTitle >
            <TaskWrapper>
                <SuperText>
                    Priorities
                </SuperText>
            </TaskWrapper>
        </TaskGridItemTitle>

        <TaskGridItemTitle >
            <TaskWrapper>
                <SuperText>
                    Setting
                </SuperText>
            </TaskWrapper>
        </TaskGridItemTitle>
    </>
}
