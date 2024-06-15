import { Link } from "react-router-dom";
import { submitLogout, usuarioGet } from "../api/usuario.api";
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Navigation = () => {

  const [currentUser, setCurrentUser] = useState();

  const reloadNav = () => {
    location.reload();
  }

  const onSubmit = () => {
    submitLogout();
  }

  useEffect(() => {
    usuarioGet()
    .then(function(res) {
      setCurrentUser(true);
    })
    .catch(function(error) {
      setCurrentUser(false);
    });
  }, []);

  if (currentUser) {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Authentication App</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <form onSubmit={onSubmit}>
                  <Button type="submit" variant="light">Log out</Button>
                </form>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
          <div className="center">
            <h2>You're logged in!</h2>
          </div>
        </div>
    );
   
  }

  return (
    <div>
        <h4><Link to='login'>Log In</Link></h4>

    </div>
  )
}

export default Navigation