import React, { Component } from 'react';
import {Col, Row} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import Button from '@material-ui/core/Button';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import ParticlesBg from 'particles-bg';
class Header extends Component {
  
   render() {
    return (
      <>
        <ParticlesBg color="#009D71" type="cobweb" bg={true} />
        <header id="home" style={{height: '100vh', background:"black", opacity:"0.9"}}>
            <Row >
              <Col>
                  <Fade delay={1500}>
                    <img src={process.env.PUBLIC_URL + "/images/fercedLogo.png"} alt="fercedlogo" style={{height: '30vh'}}/>
                  </Fade>
              </Col>
            </Row>
            <Row>
              <Col>
                <Fade delay={2000}>
                      <img src={process.env.PUBLIC_URL + "/images/fercedLogoText.png"}alt="fercedlogoText"  style={{height: '30vh'}}/>
                </Fade>
              </Col>
            </Row>
            <Row>
              <Col>
                <Fade delay={3000}>
                  <Button variant="contained"
                          style={{ background: "black", color: "white"}}
                          href="#whoweare">
                            <KeyboardArrowDown size='large' color='white'/><p></p>
                  </Button>
                  <br></br>
                </Fade>
              </Col>
            </Row>
         
        </header>
      </>
    )
  }

}

export default Header;
