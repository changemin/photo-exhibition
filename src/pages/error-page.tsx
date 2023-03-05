import styled from "styled-components";
import { NavLink, useRouteError } from "react-router-dom";


export default function ErrorPage() {
    return (
        <ErrorPageContainer>
            <p>어이쿠 어쩌다 이리로 들어오셨나요? 돌아가시지요</p>
            <NavLink to="/">Home</NavLink>
        </ErrorPageContainer>
    )
}

const ErrorPageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    flex-direction: column;

    font-family: "NanumSquareNeo-B";
`