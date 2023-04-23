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
            <img src="./image/baju-home.jpg" alt="" style={{width : '90%'}}/>
          </div>
          <div className="promo-text"> 
          <div className="judul-promo">
            <h4>Offering</h4><br/>
            </div>
            <p>Halo! Sudahkah Anda melihat koleksi baju anak kami yang lucu dan imut? Kami menawarkan desain yang trendi dan warna-warna cerah yang pasti akan membuat anak Anda terlihat menggemaskan. Beli 2 potong baju anak dan dapatkan diskon 15%!</p>
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
