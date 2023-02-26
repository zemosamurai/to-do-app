import React from 'react';
import {TaskGridItem} from "./styles/styles";
import {SuperText} from "../../../styles/components";
import {TaskWrapper} from "./Task/styles/styles";

export const TaskTitleGridColumn = () => {
    return <>
        <TaskGridItem bg paddingLeft={'20px'}>
            <TaskWrapper>
                <SuperText>Status</SuperText>
            </TaskWrapper>
        </TaskGridItem>

        <TaskGridItem bg>
            <TaskWrapper>
                <SuperText>
                    Task Progress
                </SuperText>
            </TaskWrapper>
        </TaskGridItem>

        <TaskGridItem bg>
            <TaskWrapper>
                <SuperText>
                    Dates
                </SuperText>
            </TaskWrapper>
        </TaskGridItem>

        <TaskGridItem bg>
            <TaskWrapper>
                <SuperText>
                    Priorities
                </SuperText>
            </TaskWrapper>
        </TaskGridItem>

        <TaskGridItem bg>
            <TaskWrapper>
                <SuperText>
                    Setting
                </SuperText>
            </TaskWrapper>
        </TaskGridItem>
    </>
}
