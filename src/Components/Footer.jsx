import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

function Footer() {
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col className='txt-center py-3' >
            Copyright &copy; Marv
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Footer