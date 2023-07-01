import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Footer() {
  // Time boxing myself on getting the footer properly placed. It works on a variety of screen/mobile sizes except my giant monitor
  return (
    <div className="bg-primary-subtle mt-5" css={{ bottom: "0", left: 0, position: "relative" }} >
      <Container className="p-3">
        <Row>
          <Col>
            <a href="/">Instagram</a>
          </Col>
          <Col>
            <a href="/">Facebook</a>
          </Col>
          <Col>
            <a href="/">Twitter</a>
          </Col>
        </Row>
        <br />
        <p>Disclaimer: The information collected on this form is for research purposes only and will not be shared with any third parties. However, we cannot guarantee that the government, aliens, or other nefarious forces will not be able to read your thoughts, so we recommend wearing a tinfoil hat while filling out the form.</p>
        <br />
        <p>Copyright © 2023 All Rights Reserved by Katlin</p>
      </Container>
    </div>
  );
}

export default Footer;