import React from 'react';
import {Button, FlexContainer, SuperText} from "../../../../../styles/components";
import {useFormik} from "formik";
import {useAppDispatch} from "../../../../../store/hooks";
import {deleteTaskTC, TaskDomainType, updateTaskTC} from "../taskSlice";
import {FormTaskWrapper, Input, Select, TitleForm, TitleInput} from "./styles/styles";
import {theme} from "../../../../../styles/theme";


type FormChangeTaskPropsType = {
    task: TaskDomainType
    setModalActive: (modalActive: boolean) => void
}

export const FormChangeTask = ({task, setModalActive}: FormChangeTaskPropsType) => {
    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            title: task.title,
            status: task.status,
            priority: task.priority,
            description: !!task.description ? task.description : '',
            startDate: !!task.startDate ? task.startDate : '',
            deadline: !!task.deadline ? task.deadline : '',
        },

        onSubmit: values => {
            dispatch(updateTaskTC({
                todoId: task.todoListId,
                taskId: task.id,
                domainModel: {...values}
            }))
            setModalActive(false)
        },
    })

    const onRemoveTask = () => {
        dispatch(deleteTaskTC({todoId: task.todoListId, taskId: task.id}))
        setModalActive(false)
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <FormTaskWrapper direction={'column'} rowGap={'20px'}>
                <TitleForm size={'20px'} weight={700}>Change Task</TitleForm>

                <FlexContainer direction={'column'}>
                    <SuperText>Task Title</SuperText>
                    <Input {...formik.getFieldProps('title')}/>
                </FlexContainer>

                <FlexContainer direction={'column'}>
                    <SuperText>Task Priority</SuperText>
                    <Select {...formik.getFieldProps('priority')}>
                        <option value={1}>Low</option>
                        <option value={2}>Medium</option>
                        <option value={3}>High</option>
                    </Select>
                </FlexContainer>

                <FlexContainer direction={'column'}>
                    <SuperText>Description</SuperText>
                    <Input {...formik.getFieldProps('description')}/>
                </FlexContainer>

                <FlexContainer justify={'space-between'} margin={'10px 0'}>
                    <FlexContainer direction={'column'}>
                        <SuperText>Start date</SuperText>
                        <Input {...formik.getFieldProps('startDate')} type={'date'}/>
                    </FlexContainer>

                    <FlexContainer direction={'column'}>
                        <SuperText>Deadline</SuperText>
                        <Input {...formik.getFieldProps('deadline')} type={'date'}/>
                    </FlexContainer>
                </FlexContainer>

                <FlexContainer columnGap={'20px'} justify={'flex-end'} margin={'20px 0 0'}>
                    <Button
                        type={'submit'}
                        bg={theme.colors.secondary}
                    >Save</Button>
                    <Button
                        onClick={onRemoveTask}
                        type={'button'}
                        bg={theme.colors.danger}
                    >Delete Task</Button>
                </FlexContainer>
            </FormTaskWrapper>
        </form>
    );
};
