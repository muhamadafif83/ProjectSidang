import Form from 'react-bootstrap/Form';
import "./style/mainAbout.css"
import Button from 'react-bootstrap/Button';

const MainAbout = () => {
  function handleSubmit() {
    alert('keluhan anda sudah terkirim');
  }
    return(
        <div className="container-about text-center">
          <h3>Contact us</h3><br/>
            <Form className="formContent">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Masukan Nama anda" />
      </Form.Group>
      <br/>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="email" placeholder="Masukan Email anda" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <br/>
        <Form.Control as="textarea" placeholder="Masukan keluhan anda" />
      </Form.Group>
      <Button variant="primary" type="submit"  onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </div>
    )
}

export default MainAbout