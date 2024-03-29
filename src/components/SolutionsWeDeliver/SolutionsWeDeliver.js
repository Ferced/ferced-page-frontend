import React, { Component } from 'react';
import {Col, Row} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import CodeIcon from '@material-ui/icons/Code';
import AppsIcon from '@material-ui/icons/Apps';
import BackupIcon from '@material-ui/icons/Backup';

class Solutions extends Component {    
    render() {
        return (
      
            <div style={{ background: "black"}} id='solution'>
                    <Row xs="2" style={{display: 'flex',  justifyContent:'center', alignItems:'center',width:"100%", height:"100%", color:"white"}} >
                        <Fade left>
                            <Col>
                            <AutorenewIcon size='large'/><p style={{fontSize:"20px"}}> Business Processes Automation</p>
                            </Col>
                            <Col>
                            <CodeIcon size='large' /><p style={{fontSize:"20px"}}> Web y Mobile applications</p>
                            </Col>
                        </Fade>
                        <Fade right>
                        <Col>
                            <AppsIcon size='large'/><p style={{fontSize:"20px"}}> Integrations</p>
                            </Col>
                            <Col>
                            <BackupIcon size='large' /><p style={{fontSize:"20px"}}> Scaling Product Delivery</p>
                            </Col>
                        </Fade>
                    
                    </Row>
                </div>
        )
    }
}

export default Solutions;
