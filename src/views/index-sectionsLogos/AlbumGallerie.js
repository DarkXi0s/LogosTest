import { Image } from "antd";
import { Container, Row, Col } from "reactstrap";
const AlbumGallerie = (props) => (
  <Container>
    <Row>
      <Image.PreviewGroup>
        <Col md="1"></Col>
        <Col>
          <Image width={"200px"} src={props.Img1} />
        </Col>
        <Col>
          <Image width={"200px"} src={props.Img2} />
        </Col>
        <Col>
          <Image width={"200px"} src={props.Img3} />
        </Col>
        <Col>
          <Image width={"200px"} src={props.Img4} />
        </Col>

        <Col md="1"></Col>
      </Image.PreviewGroup>
    </Row>
  </Container>
);

export default AlbumGallerie;
