import React, {Component} from 'react';
import { Navbar, Nav, /*Form, FormControl, Button,*/ Jumbotron, Container } from 'react-bootstrap';
import { HashRouter as Router, Link } from 'react-router-dom';
import Routes from './components/routes';
import './App.css';


//main page container JSX
class App extends Component {
    render() {
        return(
          <div>
            <Router>
              <Navbar className="color-nav" variant="dark">
                <Navbar.Brand>
                {' '}
                  <img
                    alt=""
                    src="/logo1.png"
                    width="250"
                    height="50"
                    hspace="157"
                    className="d-inline-block align-top"
                  />{' '}
                  
                </Navbar.Brand>
              </Navbar>
              <Routes/>
            </Router>

            <Jumbotron id="footer" jumbotron-fluid>
                    <Container id="jumboText">
                        <p>Made with &lt;3 by Ethan Shen, son of Dr. Yu-Min Shen</p>
                    </Container>
            </Jumbotron>
          </div>
        );
    }
}
export default App;