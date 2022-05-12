import React from "react"
import { Row, Col } from "react-bootstrap"

const Secondpage = () => {

    return (

        <>
            <Row>
                <Col className="justify_All_center">
                    This is our Second
                </Col>
            </Row>
            <a href="/Dev">
                <Row className="mt-5">
                    Click here to go to Home page
                </Row>
            </a>
        </>
    )
}

export default Secondpage