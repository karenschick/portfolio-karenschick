import React from 'react'
import { Container, Col, Image, Row } from 'react-bootstrap'
import fall2023Image from "../img/fall2023.jpg"

const HomePage = () => {
  return (
    <>
    <div>HomePage</div>
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image height="200px"src={fall2023Image} rounded />
        </Col>
        </Row>
    </Container>
    </>
  )
}

export default HomePage