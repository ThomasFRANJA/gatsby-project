import * as React from "react"

// Style
import "../styles/home.styl"
import "../styles/reset.styl"

// Components
import Layout from "../components/Layout/Layout"
import { Col, Row } from "react-bootstrap"


const Home = () => {
  return (
    <Layout>
      <Row>
        <Col>Col 1</Col>
        <Col>Col 2</Col>
      </Row>
      <h1>This page talk home</h1>
    </Layout>
  )
} 
export default Home


