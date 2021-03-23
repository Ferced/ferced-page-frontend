import React, { Component } from 'react';
import {Col, Row} from 'reactstrap';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
import zIndex from '@material-ui/core/styles/zIndex';

class Solutions extends Component {    


    render() {
        return (
      

            <div style={{  background:  "url(https://i.pinimg.com/originals/b9/a2/9a/b9a29a075ec4beb68025515f63432880.gif)", backgroundSize:"cover", 
                color:"white",  height:"100vh"}}>
                <div style={{backgroundColor:"black", opacity:"0.8", height:"100vh"}}>
                    <Row xs="2" style={{display: 'flex',  justifyContent:'center', alignItems:'center',width:"100%", height:"100%"}} >
                        <Fade left duration="5000">
                            <Col>
                            <MaterialIcon icon="autorenew" size='large' color="pink"/><p style={{fontSize:"30px"}}> Business Processes Automation</p>
                            </Col>
                            <Col>
                            <MaterialIcon icon="code" size='large' color="green"/><p style={{fontSize:"30px"}}> Web y Mobile applications</p>
                            </Col>
                        </Fade>
                        <Fade right duration="5000">
                        <Col>
                            <MaterialIcon icon="integration_instructions" size='large' color="violet"/><p style={{fontSize:"30px"}}> Integrations</p>
                            </Col>
                            <Col>
                            <MaterialIcon icon="multiple_stop" size='large' color="yellow"/><p style={{fontSize:"30px"}}> Scaling Product Delivery</p>
                            </Col>
                        </Fade>
                    
                    </Row>
                </div>
            </div> 
        )
    }
}

export default Solutions;
