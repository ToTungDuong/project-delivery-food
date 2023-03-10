import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import "../../style/footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="logo footer_logo text-start">
              <img src={logo} alt="" />
              <h5>Tasty Treat</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                dolorem est adipisci! Ratione dicta consectetur soluta.
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer_title">Delivery Time</h5>
            <ListGroup className="delivery_time-list">
              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <span>Sunday - Thurday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer_title">Contact</h5>
            <ListGroup className="delivery_time-list">
              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <p>Location: 47 Nguyen Thi Due, Thanh Binh, Hai Duong</p>
              </ListGroupItem>
              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <span>Phone: 0866617623</span>
              </ListGroupItem>

              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <span>Email: tod25504@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer_title">Newsletter</h5>
            <p>Subcribe ouw newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter Your Email" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright_text">
              Copyright - 2023, website made by To Tung Duong. All Rights
              Reserved
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social_links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span className=" d-flex gap-3">
                <Link to="https://www.facebook.com/profile.php?id=100007764138878">
                  <i class="ri-facebook-line"></i>
                </Link>
                <Link to="https://www.facebook.com/profile.php?id=100007764138878">
                  <i class="ri-github-line"></i>
                </Link>
                <Link to="https://www.facebook.com/profile.php?id=100007764138878">
                  <i class="ri-instagram-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
