import React from 'react';
import {Button, FlexContainer, SuperText} from "../../styles/components";
import {LoginContentWrapper, LoginInput, LoginTitle, LoginWrapper} from "./styles/Login.styles";
import {useFormik} from "formik";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {loginTC} from "./authSlice";
import {Navigate} from "react-router-dom";
import {theme} from "../../styles/theme";
import * as Yup from 'yup';

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    password: Yup.string()
        .min(5, 'Must be at least 5 characters.')
        .max(20, 'Must be 20 characters or less')
        .required('Required')

})

export const Login = () => {
    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector<boolean>(state => state.auth.isLoggedIn)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            dispatch(loginTC(values))
            formik.resetForm()
        },
    })

    if (isLoggedIn) {
        return <Navigate to={'/'}/>
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <LoginWrapper align={'center'} justify={'center'}>
                <LoginContentWrapper direction={'column'}>
                    <LoginTitle color={theme.colors.fontPrimary} size={'20px'}>Login</LoginTitle>

                    <FlexContainer justify={'space-between'} margin={'20px 0 10px'}>
                        <LoginInput
                            {...formik.getFieldProps('email')}
                            placeholder={'email'}
                        />
                    </FlexContainer>
                    {formik.touched.email
                        && formik.errors.email
                        && <SuperText color={'red'}>{formik.errors.email}</SuperText>}

                    <FlexContainer justify={'space-between'} margin={'10px 0'}>
                        <LoginInput
                            {...formik.getFieldProps('password')}
                            placeholder={'password'}
                        />
                    </FlexContainer>
                    {formik.touched.password
                        && formik.errors.password
                        && <SuperText color={'red'}>{formik.errors.password}</SuperText>}

                    <FlexContainer columnGap={'5px'} margin={'10px 0 20px'} justify={'flex-start'} align={'flex-end'}>
                        <input
                            {...formik.getFieldProps('rememberMe')}
                            type='checkbox'
                            checked={formik.values.rememberMe}
                            style={{margin: 0}}
                        />
                        <SuperText color={theme.colors.fontPrimary}>remember me</SuperText>
                    </FlexContainer>

                    <Button type={'submit'}>Login</Button>
                </LoginContentWrapper>
            </LoginWrapper>
        </form>
    )
}
