import React, { Component } from 'react'
import { Container,Row,Col } from 'react-bootstrap';

import '../sass/cardstory.scss'

export class cardstory extends Component {

    render() {
        return (
            <React.Fragment>
                <header>
                    <Container>
                        <Row>
                        </Row>
                    </Container>
                </header>
                <section className="satu">
                    <Container>
                        <Row>
                            <Col className="text-center width100">
                                <h2>Playing Cards Like Never Before</h2>
                                <p>Here at Card Story, we greatly value Playing card as ana Art.</p>
                                <p>Here at Card Story, we greatly value Playing card as ana Art.</p>
                                <img src="../static/image/cardbanyak.jpg" width="100%"/>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>

)
    }
}

export default cardstory
