import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Images() {
  return (
    <>
      <div className="section section-images">
        <Container>
          <Row>
            <Col md="12">
              <div className="d-flex flex-column mb-1">
                <div className="d-flex justify-content-end">
                  <div>
                    <span className="badge badge-pill badge-success title_info" id="queesnatural">¿Qué es B'natural?</span>
                  </div> 
                </div>
                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor 
                (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal
                manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó 
                como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. 
                Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem
                Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye
                versiones de Lorem Ipsum.</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="6">
            <div className="d-flex flex-column">
                <div className="d-flex justify-content-start">
                  <div>
                    <span className="badge badge-pill badge-info title_info" id="queesnatural">Acerca de mi</span>
                  </div> 
                </div>
              <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
              Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
                galería de textos y los mezcló de tal manera que logró hacer un libro de textos 
                especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en 
                documentos electrónicos, quedando esencialmente igual al original. 
                Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian 
                pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo 
                Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
              </div>
              </Col>
              <Col md="6">
                <div className="d-flex justify-content-center">
                  <img className='perfil_gaby' src={require("assets/img/gaby.jpg").default} alt="Logo" />  
                </div>
              </Col>
          </Row>
            
          <Row>
            <Col md="12">
              <div className="d-flex flex-column mb-1">
                <div className="d-flex justify-content-end">
                  <div>
                    <span className="badge badge-pill badge-success title_info" id="queesnatural">Mas información</span>
                  </div> 
                </div>
                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
                cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
                galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
                No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos 
                electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la 
                creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con
                 software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Images;
