import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./home-card.css";

const CardHome = () => {
  return (
    <div className="cardHome">
      <h3>Preview</h3>
      <CardGroup
        style={{
          width: "70%",
          marginLeft: "16%",
          marginTop: "50px",
        }}
      >
        <Card className="card-1">
          <Card.Img variant="top" src="./Image/jaket anak bulu.jpg" />
          <Card.Body>
            <Card.Title>jaket anak bulu</Card.Title>
            <Card.Text>1 - 3 thn</Card.Text>
            <Card.Text>
              jaket ini mempunyai bulu yang sangat lembut cocok dipakai saat
              dingin
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="./Image/jaket jeans anak.jpg" />
          <Card.Body>
            <Card.Title>jaket jeans anak</Card.Title>
            <Card.Text>1 - 3 thn</Card.Text>
            <Card.Text>
              jaket yang sangat cocok untuk menambah penampilan anak anda
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card rd className="card-3">
          <Card.Img variant="top" src="./Image/jaket bulu anak uniqlo.jpg" />
          <Card.Body>
            <Card.Title>jaket bulu anak uniqlo</Card.Title>
            <Card.Text>1 - 3 thn</Card.Text>
            <Card.Text>
              jaket ini mempunyai bulu yang sangat lembut cocok dipakai saat
              dingin
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <center>
        <a href="/Product">
          <button>See More</button>
        </a>
      </center>
    </div>
  );
};

export default CardHome;
