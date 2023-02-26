import React from 'react';
import styled from "styled-components";
import {Button, FlexContainer, Title1} from "../../styles/components";
import {useAppDispatch} from "../../store/hooks";
import {logOutTC} from "../Login/authSlice";
import {theme} from "../../styles/theme";

const HeaderWrapper = styled(FlexContainer)`
  background-color: ${p => p.theme.colors.bgPrimary};
  height: 50px;
  padding: 0 20px;
`


export const Header = () => {
    const dispatch = useAppDispatch()

    const logOut = () => dispatch(logOutTC())


    return (
        <HeaderWrapper align={'center'} justify={'space-between'}>
            <Title1>TODO ZEMO</Title1>
            <Button bg={theme.colors.primary} onClick={logOut}>Log Out</Button>
        </HeaderWrapper>
    );
};
