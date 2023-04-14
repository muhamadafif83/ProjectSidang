import "./home.css";
import CardHome from "./card/home-card";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const Home = () => {
  return (
    <div className="container-home">
      <>
        <NavBar />
      </>
      <div className="content-home">
        <h4 style={{ textAlign: "center", padding: "10px" }}>New Arrivals!</h4>
        <img src="./image/baju-home.jpg" alt="#" />
        <a href="/Product"><button>See More</button></a>
      </div>
      <>
        <CardHome />
      </>
      <div className="offer">
        <h3>Special Offer</h3>
        </div>
        <div className="promo">
      <div className="promo-content">
          <div className="promo-img">
            <img src="./image/baju-home.jpg" alt="" style={{width : '87%'}}/>
          </div>
          <div className="promo-text">
            <h5>Jangan lewatkan kesempatan untuk memiliki baju berkualitas dengan harga terbaik!</h5>
          </div>
      </div>
            {/* <button className="promo-button">test</button> */}
      </div>
      <>
      <Footer />
      </>
    </div>
  );
};

export default Home;
