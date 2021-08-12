import React, {Component} from 'react';
import { Navbar, Jumbotron, Container } from 'react-bootstrap';
import { HashRouter as Router} from 'react-router-dom';
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
                  
                  <div style={{display: "flex", alignItems: "center"}}>
                    
                    <img
                    alt=""
                    src="/logo1.png"
                    width="250"
                    height="50"
                    // hspace="130"
                    style={{marginLeft: "16%", marginRight: "50px"}}
                    className="d-inline-block align-top"
                  />{' '}
                    North Texas Comprehensive Hemophilia Treatment Center - Adult Program
                    </div>
                  {/*  */}
                </Navbar.Brand>
              </Navbar>
              <Routes/>
            </Router>

            <Jumbotron id="footer" jumbotron-fluid>
                    <Container id="jumboText">
                        <p>
                          Monday - Friday<br/>
                          8:00 am—5:00 pm<br/>
                          (214) 648-5177<br/>
                          (214) 648-1937<br/>
                          (214) 648-3049<br/>
                          Fax: (214)-648-4105
                        </p>
                    </Container>
            </Jumbotron>
          </div>
        );
    }
}
export default App;