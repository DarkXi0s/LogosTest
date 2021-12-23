import React from "react";

// React Router
import { Link } from "react-router-dom";
//Ant Lib
import { Image, Space } from "antd";
// reactstrap components
import { Button, Container, Row } from "reactstrap";
// React Icons
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "assets/css/logosStyle.css";
const EventComponent = (props) => {
  return (
    <Container fluid>
      <Row style={{ padding: "1%" }}>
        <div
          style={{ paddingTop: "5%", paddingBottom: "8%" }}
          className="team-player"
        >
          <Space size={12}>
            <Image
              className="img-fluid img-raised"
              style={{
                maxHeight: "425px",
                minHeight: "425px",
                width: "325px",
                maxWidth: "325px",
              }}
              src={props.Img}
              placeholder={
                <Image
                  preview={false}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                  width={"auto"}
                />
              }
            />
          </Space>

          <h4
            style={{
              maxHeight: "125px",
              minHeight: "125px",
            }}
            className="title"
          >
            {props.title}
          </h4>
          <p className="category text-info">Événement</p>
          <p
            className="description"
            style={{
              textAlign: "justify",
              padding: "2%",
              maxHeight: "250px",
              minHeight: "250px",
            }}
          >
            {props.description}
          </p>
          <Button
            block
            className="btn-round"
            color="info"
            to={props.link}
            tag={Link}
            size="lg"
          >
            Plus d'information
          </Button>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "3%",
            }}
          >
            <div style={{ display: "flex" }}>
              <FaClock color="#1aa5e1" size="14px" />
              <h6> {props.date}</h6>
            </div>
            <div style={{ display: "flex" }}>
              <FaMapMarkerAlt color="#1aa5e1" size="14px" />
              <h6> {props.lieu} </h6>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default EventComponent;
