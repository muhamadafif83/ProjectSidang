import Card from "react-bootstrap/Card";
import dataProduct from "./dataProduct";
import "./listProduct.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaTiktok, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Productlist = () => {
  return (
    <div className="listProduct">
      <div className="clothing-card">
        {dataProduct.map((card) => (
          <Card key={card.id} style={{ width: "18rem" }} className="listCard">
            <Card.Img variant="top" src={card.img} style={{ width: "100%" }} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <hr />
              <Card.Text>{card.size}</Card.Text>
              <Card.Text>{card.desc}</Card.Text>
              <Card.Text>{card.harga}</Card.Text>
              <Card.Text>{card.condition}</Card.Text>
              <>
                <DropdownButton
                  id="dropdown-item-button"
                  title="Contact us here"
                >
                  <Dropdown.ItemText>Order here</Dropdown.ItemText>
                  <Dropdown.Divider />
                  <Dropdown.Item href="https://www.instagram.com/damdam.suit/" target="_blank">
                    <FaInstagram size={20} /> Instagram
                  </Dropdown.Item>
                  <Dropdown.Item href="https://web.whatsapp.com/" target="_blank">
                    <FaWhatsapp size={20} /> Whatsapp
                  </Dropdown.Item>
                  <Dropdown.Item href="https://www.tiktok.com/foryou" target="_blank">
                    <FaTiktok size={20} /> TikTok
                  </Dropdown.Item>
                </DropdownButton>
              </>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Productlist;
