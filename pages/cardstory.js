import React, { Component } from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import '../sass/cardstory.scss'

export class cardstory extends Component {

    render() {
        return (
            <React.Fragment>
                <header style={{position:'relative'}}>
                    <Container>
                        <Row className="text-center">
                            <div className="center-abs">
                                <Fade bottom>
                                    <div className="text-center">
                                        <h1 style={{fontWeight:'bold',color:'#8d793e'}}>PASSION</h1>
                                        <h1 style={{fontWeight:'bold',color:'#8d793e'}}>FOR QUALITY</h1>
                                    </div>
                                </Fade>
                            </div>
                        </Row>
                    </Container>
                </header>
                <section className="satu">
                    <Container>
                        <Row>
                            <Col className="text-center pad">
                                <Fade bottom>
                                    <h2 className="mb-5">Playing Cards Like Never Before</h2>
                                </Fade>
                                <Fade>
                                    <p>Here at Card Story, we greatly value Playing card as ana Art.</p>
                                    <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </Fade>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="dua">
                    <Container>
                        <Row>
                            <Col className="text-center pad center-abs">
                                <h2 className="mb-5">NEW TO PLAYING CARDS?</h2>
                                <p>Let's see what a playing cards can do!</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="tiga">
                    <Container>
                        <Row>
                            <Col md={3}>
                                <div className="cardku">
                                    <div className="cardku__side cardku__side--front cardku__side--front-1">
                                        <div className="cardku__description">
                                            <img src="../static/image/fathom_600px.png" width="100%"/>
                                        </div>
                                    </div>
                                    <div className="cardku__side cardku__side--back cardku__side--back-1">
                                        <div className="cardku__description">
                                            <img src="../static/image/fathom-back_600px.png" width="100%"/>
                                        </div>
                                    </div>
                                </div>
                                <p className="fs-bold">Fathom</p>
                                <p>IDR 100,000</p>
                            </Col>
                            <Col md={3}>
                                <div className="cardku">
                                    <div className="cardku__side cardku__side--front cardku__side--front-1">
                                        <div className="cardku__description">
                                            <img src="../static/image/little-island_600px.png" width="100%"/>
                                        </div>
                                    </div>
                                    <div className="cardku__side cardku__side--back cardku__side--back-1">
                                        <div className="cardku__description">
                                            <img src="../static/image/little-island-back_600px.png" width="100%"/>
                                        </div>
                                    </div>
                                </div>
                                <p className="fs-bold">Island</p>
                                <p>IDR 100,000</p>
                            </Col>
                            <Col md={3}>
                                <div className="cardku">
                                    <div className="cardku__side cardku__side--front cardku__side--front-1">
                                        <div className="cardku__description">
                                            <img src="../static/image/ltd_600px.png" width="100%"/>
                                        </div>
                                    </div>
                                    <div className="cardku__side cardku__side--back cardku__side--back-1">
                                        <div className="cardku__description">
                                            <img src="../static/image/Faikar.jpg" width="100%"/>
                                        </div>
                                    </div>
                                </div>
                                <p className="fs-bold">LTD.</p>
                                <p>IDR 100,000</p>
                            </Col>
                            <Col md={3}>
                                <div className="cardku">
                                    <div class="cardku__side cardku__side--front cardku__side--front-1">
                                        <div className="cardku__description">
                                            <img src="../static/image/pressers_600px.png" width="100%"/>
                                        </div>
                                    </div>
                                    <div className="cardku__side cardku__side--back cardku__side--back-1">
                                        <div className="cardku__description">
                                            <img src="../static/image/pressers-back_600px.png" width="100%"/>
                                        </div>
                                    </div>
                                </div>
                                <p className="fs-bold">Pressers</p>
                                <p>IDR 100,000</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="empat">
                    <Container>
                        <Row>
                            <Col className="text-center center-abs">
                                <h2 className="">Free Shipping Order Over IDR 500,000</h2>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="lima">
                    <Container>
                        <Row className="pt-5 pb-5">
                            <Col md={6}>
                                <img src="../static/image/dailydeals.jpg" width="100%" height="100%"/>
                            </Col>
                            <Col md={6}>
                                <img src="../static/image/newcollections.jpg" width="100%" height="100%"/>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="enam width100 pt-5 pb-5">
                    <Container>
                        <Row className="pt-5 pb-5">
                            <Col md={6} className="text-center">
                                <Fade left>
                                    <h2 className="mb-5" style={{color:'#8d793e'}}>CUSTOMER SERVICES.</h2>
                                    <p  style={{color:'white'}}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stat ever since the 1500s, when an unk tasyasdasdasd</p>
                                </Fade>
                            </Col>
                            <Col md={6} className="text-center">
                                <Fade right>
                                    <h2 className="mb-5" style={{color:'#8d793e'}}>100% SATISFACTION GUARANTEED.</h2>
                                    <p style={{color:'white'}}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard d since the 1500s, when an unk asddssssssss</p>
                                </Fade>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>

)
    }
}

export default cardstory
