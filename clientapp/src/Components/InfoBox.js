import { Card, Row, Col } from 'react-bootstrap'
import '../App.css';

function InfoBox({ info }) {

  /* Checks if the props length is equal to zero, if so it will return null,
  otherwise it will return the "InfoBox" containing information about the selected
  program and the programs instructor. */

  if (info.length === 0) {
    return null;
  } else {
    return (
      
      <div className="InfoBox">
        <Row className="customRow">
          <Col xs={6}>
            <h1>{info.title}</h1>
            <h3>Om programmet</h3>
            <p>{info.desc}</p>
          </Col>
          <Col className="customCol" xs={6}>
            <h3>Instruktör</h3>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={info.Img} />
              <Card.Body>
                <Card.Title >{info.instructor}</Card.Title>
                <Card.Text>
                  "{info.quote}"
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }

}

export default InfoBox;