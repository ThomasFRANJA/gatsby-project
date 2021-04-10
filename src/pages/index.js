import React from "react"
import Layout from "../components/Layout/Layout"

// import { graphql } from "gatsby"
// import Img from 'gatsby-image'

import "../styles/home.styl"
// import "../styles/reset.styl"

// Components
// import Layout from "../components/Layout/Layout"
// import { Col, Row } from "react-bootstrap"

// import { Router } from "@reach/router"


const Home = ({data}) => {
  return(
    <Layout>
    {/* <img src={logo} alt="logo consulting" /> */}
    {/* { data.allFile.edges.map(({node}, index) => (
        <img src={node.relativePath} key={index} />
      ))
    } */}
        {/* <Img fluid={data.logoConsulting.childImageSharp.fluid} /> */}
        <section className="container-fluid">
          <div className="row center-xs">
            <div className="col-xs-2">
            <h1>home page</h1>

            </div>
          </div>
        </section>
    </Layout>
  )
}
export default Home;

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

