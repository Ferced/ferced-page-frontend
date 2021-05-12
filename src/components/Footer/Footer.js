import React, { Component } from 'react';
import {
  Row,
  Col
} from "reactstrap";

class Footer extends Component {
  render() {
    return (
      <>
        <div style={FooterStyle}>
          <Row>
            <Col style={{ width: "50vh" }}>
              <p style={{ fontSize: '1.15rem' }} href='#contactus'>
                Indice
              </p>
              <p href='#home'>
                Acerca de Ferced
              </p>
              <p href='#solution'>
                Tecnologias
              </p>
              <p href='#contactus' >
                Contacto
              </p>
              <p >
                Redes sociales
              </p>

            </Col>
          </Row>

        </div>


        <div style={SecondFooterStyle}>
          <p style={{ fontSize: '14px' }}>Creada por Ferced 2021 ®</p>
          <form>
          </form>
        </div>
      </>
    )
  }
}

const FooterStyle = {
  background: 'black',
  color: '#fff',
  padding: '10px'
}
const SecondFooterStyle = {

  background: 'black',
  color: '#fff',
  textAlign: 'center',
  padding: '7px'
}
export default Footer;
