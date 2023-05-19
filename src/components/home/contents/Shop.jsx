import React, { useEffect, useState } from "react";
import "../Home.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Shop = ({ toyData }) => {
  const [data, setData] = useState([]);
  const [activeButton, setActiveButton] = useState("Marvel");

  useEffect(() => {
    const toyItem = toyData?.filter((dt) => dt.subcategory === activeButton);
    setData(toyItem);
  }, []);

  const showData = (e) => {
    const toyItem = toyData?.filter((dt) => dt.subcategory === e.target.name);
    setData(toyItem);
    setActiveButton(e.target.name);
  };

  return (
    <div>
      <Container>
        <div className="p-4 border" style={{ background: "#afe3f3" }}>
          <Row className="m-0 p-0">
            <Col className="m-0 p-0">
              <Button
                name="Marvel"
                onClick={showData}
                className="w-100 py-2"
                style={{ borderRadius: "0px", background: "#0A58CA" }}
              >
                Action figure toys
              </Button>
            </Col>
          </Row>
          <Row className="w-100 m-0 p-0">
            <Col className="m-0 p-0">
              <Button
                name="Marvel"
                onClick={showData}
                className={`w-100 py-2 ${
                  activeButton === "Marvel" ? "active" : ""
                }`}
                style={{ borderRadius: "0px" }}
              >
                Marvel
              </Button>
            </Col>
            <Col className="m-0 p-0">
              <Button
                name="Star Wars"
                onClick={showData}
                className={`w-100 py-2 ${
                  activeButton === "Star Wars" ? "active" : ""
                }`}
                style={{ borderRadius: "0px" }}
              >
                Star Wars
              </Button>
            </Col>
            <Col className="m-0 p-0">
              <Button
                name="DC"
                onClick={showData}
                className={`w-100 py-2 ${
                  activeButton === "DC" ? "active" : ""
                }`}
                style={{ borderRadius: "0px" }}
              >
                DC
              </Button>
            </Col>
            <Col className="m-0 p-0">
              <Button
                name="Transformers"
                onClick={showData}
                className={`w-100 py-2 ${
                  activeButton === "Transformers" ? "active" : ""
                }`}
                style={{ borderRadius: "0px" }}
              >
                Transformers
              </Button>
            </Col>
          </Row>
          <Row className="w-100 shop-category-toys">
            {data.map((item) => (
              <div key={item.id} className="m-0 p-0">
                <Card
                  style={{ width: "100%" }}
                  className="d-flex flex-row align-items-center"
                >
                  <Card.Img
                    variant="top"
                    src={item.picture}
                    style={{
                      width: "auto",
                      height: "200px",
                      objectFit: "contain",
                      padding: "20px",
                    }}
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">view details</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Shop;