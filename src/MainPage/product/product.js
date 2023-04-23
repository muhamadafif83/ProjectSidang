// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/navbar/navbar";
import Productlist from "./listProduct/listProduct";
import Productlist2 from "./listProduct/listProduct2";
import "./product.css";
import data from "./productData";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaTiktok, FaWhatsapp, FaInstagram } from "react-icons/fa";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Product = () => {
  return (
    <div className="container-product">
      <>
        <NavBar />
      </>
      <div className="content-Product">
        <div className="Product-text">
          <img src="./image/baju-home.jpg" alt="#" />
          <h4>New Arrivals!</h4>
        </div>
        <div className="product-card">
          {data.map((card) => (
            <Card
              key={card.id}
              style={{ width: "18rem" }}
              className="productCard"
            >
              <Card.Img variant="top" src={card.img} />
              <Card.Body className="cardBody">
                <Card.Title>{card.title}</Card.Title>
                <hr />
                <Card.Text>{card.size}</Card.Text>
                <Card.Text>{card.desc}</Card.Text>
                <DropdownButton
                  id="dropdown-item-button"
                  title="Contact us here"
                >
                  <Dropdown.ItemText>Order here</Dropdown.ItemText>
                  <Dropdown.Divider />
                  <Dropdown.Item href="https://www.instagram.com/damdam.suit/" target="_blank"  >
                    <FaInstagram size={20} /> Instagram
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" target="_blank">
                    <FaWhatsapp size={20} /> Whatsapp
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3" target="_blank">
                    <FaTiktok size={20} /> TikTok
                  </Dropdown.Item>
                </DropdownButton>
              </Card.Body>
            </Card>
          ))}
        </div>
        <>
          <div className="clothing-text">
            <h4>Clothing</h4>
          </div>
          <Productlist2 />
          <Productlist />
        </>
      </div>
      <>
        <Footer />
      </>
    </div>
  );
};

export default Product;
