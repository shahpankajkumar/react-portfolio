import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Card } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="12">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5">
          {dataportfolio.map((data, i) => {
            return (
              <Card className="mb-5" key={i} style={{backgroundColor:'black'}} >
                <Card.Body>
                  <Card.Text style={{color:'white'}}>
                  {data.description}
                  </Card.Text>
                  <a target="_blank" href={data.link} style={{color:'blue'}}>view project</a>
                </Card.Body>
            </Card>
            );
          })}
        </div>
      
      </Container>
    </HelmetProvider>
  );
};
