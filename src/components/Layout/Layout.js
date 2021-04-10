import React from 'react'
// import styled from 'styled-components';

// import { graphql } from "gatsby"

import { Header } from "../allComponents";
import Head from './Helmet';
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'


const Layout = ({children}) => {
    return (
        <>
        <Head />
        <Header/>
        <Container>
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

// export const query = graphql`
//     query {
//         logoConsulting : file(relativePath: {eq: "00-InColor-proposition.svg"}) {
//         id
//         childImageSharp {
//         fluid(maxWidth: 200) {
//             ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//     }
// `


