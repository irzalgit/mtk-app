import React from 'react';
 import {
    //  Collapse,
    //  Navbar,
    //  NavbarToggler,
    //  NavbarBrand,
    //  Nav,
    // NavItem,
    //  NavLink,
    Container,
     Row,
     Col,
     Jumbotron,
     Button
 } from 'reactstrap';


export default function About() {
  return (
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Tentang Portal Peta Pikiran Bphy</h1>
                                <p>
                                    <Button
                                        tag="a"
                                        color="success"
                                        size="large"
                                        href="http://reactstrap.github.io"
                                        target="_blank">
                                        irzalgit.github.io
                                    </Button>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                );
}







