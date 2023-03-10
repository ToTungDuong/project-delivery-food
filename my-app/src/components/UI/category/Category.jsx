import React from "react";
import { Container, Row, Col } from "reactstrap";
import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";
import "../../../style/category.css";
const categoryData = [
  {
    display: "Fastfood",
    imgUrl: categoryImg01,
  },
  {
    display: "Pizza",
    imgUrl: categoryImg02,
  },
  {
    display: "Asian Food",
    imgUrl: categoryImg03,
  },
  {
    display: "Row Meat",
    imgUrl: categoryImg04,
  },
];
const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-3">
            <div className="category_item d-flex align-items-center gap-3">
              <div className="category_img d-flex align-items-center gap-3 ">
                <img src={item.imgUrl} alt="" />
                <h6>{item.display}</h6>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
