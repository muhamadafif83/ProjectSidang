// import React from 'react';
// import { FaTiktok, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import "./foter.css";
import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Delicious+Handrawn&family=Poppins:wght@300&display=swap');
</style>;

function Footer() {
  return (
    <MDBFooter
      bgColor="primary"
      className="text-white text-center text-lg-left"
    >
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Footer Content</h5>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              atque ea quis molestias. Fugiat pariatur maxime quis culpa
              corporis vitae repudiandae aliquam voluptatem veniam, est atque
              cumque eum delectus sint!
            </p>
          </MDBCol>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 4
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Links</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-white">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 4
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-white" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}
export default Footer;
//     <footer>
//         <div className="footer-content">
//         <h5>Contact Us</h5>
//         <h6>Accessibility</h6>
//         </div>
//       <div className="social-media">
//         <div className="TikTok">
//         <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
//           <FaTiktok size={20} />
//         </a>
//         </div>
//         <div className="whatsApp">
//         <a href="https://twitter.com/" target="_blank" rel="noreferrer">
//           <FaWhatsapp size={20} />
//         </a>
//         </div>
//         <div className="Instagram">
//         <a href="https://www.instagram.com/damdam.suit/" target="_blank" rel="noreferrer">
//           <FaInstagram size={20} />
//         </a>
//         </div>
//       </div>
//         <div className='copyright text-center mt-5'>
//           <h5>Copyright 2023 © DamDam suit</h5>
//         </div>
//     </footer>
//   );
// }

