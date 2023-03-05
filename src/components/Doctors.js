import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { doctorData } from '../helpers/data';

function Doctors() {
    return (
        <Container className="d-flex justify-content-center">
            <Row className="d-flex flex-wrap justify-content-around w-50" >
            <div><h3>Our Doctors</h3></div>
                {doctorData.map((doctor, id) => (
                    <Col key={doctor.id}>
                        <img key={doctor.img} src={doctor.img} alt={doctor.name} className="mt-4 mb-4 doctor-img img-thumbnail" />
                        <div className="mb-4">
                            <h5>{doctor.name}</h5>
                            <h6>{doctor.dep}</h6>
                        </div>
                    </Col>
                    )
                )}
            </Row>
        </Container>
    )
};

export default Doctors;