import {useState} from "react"
import {Form,Button,Col} from "react-bootstrap"
import axios from "axios";

export default function Register(props){
  const [fName, setFirstName] = useState();
  const [lName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  //const [error, setError] = useState({});

  function handleSubmit(event){
  
    event.preventDefault();

    axios({
      method: 'POST',
      url: '/register',
      data:{
        fName, lName, email, password
      }
    })
      .then(res => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return  (
    <section>
      <Col md={{ span: 3, offset: 4 }} xs={2}>
        <Form>
          <h1>Register</h1>
          <Form.Group controlId="formBasicFirstName">
            <Form.Control type="text" placeholder="Enter First Name" value={fName} onChange={handleFirstNameChange}/>
            <p></p>
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Control type="text" placeholder="Enter Last Name" value={lName} onChange={handleLastNameChange}/>
            <p></p>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Col>
    </section>
)
  }