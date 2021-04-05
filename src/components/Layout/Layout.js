import React from 'react'
// import styled from 'styled-components';

import { Header } from "../allComponents";
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'


const Layout = ({children}) => {
    return (
        <>
        <Header/>
        <Container fluid>
            {children}
        </Container>
        </>
    )
}

// const Main = styled.main`
// 	max-width: 1000px;
// 	${'' /* min-height: 100vh; */}
// 	width: 100%;
// 	margin: 0 auto;
// 	padding: 0 30px 0px 30px;
// `;

export default Layout
