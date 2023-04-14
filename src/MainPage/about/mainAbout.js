import Figure from 'react-bootstrap/Figure'; 
import "./style/mainAbout.css"
import { GrLocation } from 'react-icons/gr'

const MainAbout = () => {
    return(
        <div className="container-about text-center d-flex mt-4">
            <div className="figurImage mx-auto">
            <Figure>
            <Figure.Caption className='fs-5 fw-bold'style={{'color': 'black'}}>
        About our store
      </Figure.Caption>
      <Figure.Image rounded
        width={400}
        height={180}
        alt="171x180"
        src="./image/disney.jpg"
      />
    </Figure>
    </div>
    <div className="descAbout">
    <h3>About</h3>
    <p>Toko kami menyediakan berbagai macam baju anak<br/> dari umur 1 tahun ke atas</p>
    <div className="iconlokasi">
    <GrLocation size={35}/>
    </div>
    </div>
        </div>
    )
}

export default MainAbout