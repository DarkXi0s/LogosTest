import React from "react";
import { Image, Space } from "antd";
import { Container, Col, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";

import Img from "assets/img/logosN.jpg";
import Img2 from "assets/img/logosN3.jpg";
import Img3 from "assets/img/logosN5.jpg";
export default function QuiltedImageList() {
  return (
    <Container
      fluid
      id="Media-section"
      style={{
        textAlign: "center",
        paddingTop: "3%",
        paddingBottom: "3%",
        backgroundColor: "whitesmoke",
      }}
    >
      <p
        style={{
          fontSize: "20px",
          padding: "1%",
        }}
      >
        <h2>Media</h2>
      </p>

      <Row>
        <Col md="1"></Col>
        <Col md="4">
          <Space size={12}>
            <Image
              width={"auto"}
              height={"auto"}
              src={Img3}
              placeholder={
                <Image
                  preview={false}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                  width={"auto"}
                />
              }
            />
          </Space>
        </Col>
        <Col md="2" lg="2">
          <Row>
            <Space size={12}>
              <Image
                width={"auto"}
                src={Img}
                placeholder={
                  <Image
                    preview={false}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                    width={"auto"}
                  />
                }
              />
            </Space>
          </Row>
          <Row>
            <Col md="2"></Col>
            <Space size={12}>
              <Image
                width={"auto"}
                src={Img2}
                placeholder={
                  <Image
                    preview={false}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                    width={"auto"}
                  />
                }
              />
            </Space>
          </Row>
        </Col>
        <Col md="4" lg="4">
          {" "}
          <Space size={12}>
            <Image
              width={"auto"}
              src={Img2}
              placeholder={
                <Image
                  preview={false}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                  width={"auto"}
                />
              }
            />
          </Space>{" "}
        </Col>
        <Col md="1"></Col>
      </Row>
      <Row>
        <Col md="1"></Col>
        <Col md="3" lg="3">
          <Space size={12}>
            <Image
              width={"auto"}
              src={Img}
              placeholder={
                <Image
                  preview={false}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                  width={"auto"}
                />
              }
            />
          </Space>
        </Col>
        <Col md="4" lg="4">
          <Space size={12}>
            <Image
              width={"auto"}
              src={Img2}
              placeholder={
                <Image
                  preview={false}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                  width={"auto"}
                />
              }
            />
          </Space>
        </Col>
        <Col md="3" lg="3">
          {" "}
          <Space size={12}>
            <Image
              width={"auto"}
              src={Img}
              placeholder={
                <Image
                  preview={false}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                  width={"auto"}
                />
              }
            />
          </Space>
        </Col>
        <Col md="1"></Col>
      </Row>
      <Row>
        <Col>
          <div style={{ paddingTop: "5%" }} className="send-button">
            <Button
              className="btn-round"
              color="info"
              tag={Link}
              to="/Media-page"
              size="lg"
              style={{ width: "30%" }}
            >
              Voir Plus ...
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
