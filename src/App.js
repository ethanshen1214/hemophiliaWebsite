import React, {Component} from 'react';
import { Navbar, Jumbotron, Container, Row, Col, } from 'react-bootstrap';
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
                    style={{marginLeft: "18%", marginRight: "50px"}}
                    className="d-inline-block align-top"
                  />{' '}
                    <b>North Texas Comprehensive Hemophilia Treatment Center</b>
                    {/* <img
                            alt=""
                            src="/bloodLogo3.png"
                            width="80%"
                            height="80%"
                            // hspace="130"
                            //style={{marginLeft: "16%", marginRight: "50px"}}
                            className="d-inline-block align-top"
                    /> */}
                    </div>
                  {/*  */}
                </Navbar.Brand>
              </Navbar>
              <Routes/>
            </Router>

            <Jumbotron id="footer" jumbotron-fluid>
                    <Container id="jumboText">
                      <Row>
                        <Col md={{ span: 4, offset: 2 }}>
                          <br/>
                          <img
                            alt=""
                            src="/bloodLogo2.png"
                            //width="250"
                            //height="50"
                            // hspace="130"
                            style={{marginLeft: "16%", marginRight: "50px"}}
                            className="d-inline-block align-top"
                          />{' '}
                        </Col>
                        <Col md={{ span: 4, offset: 0 }}>
                          <p>
                            Monday - Friday<br/>
                            8:00 am—5:00 pm<br/>
                            (214) 648-5177<br/>
                            (214) 648-1937<br/>
                            (214) 648-3049<br/>
                            Fax: (214)-648-4105
                          </p>
                        </Col>
                      </Row>
                    
                        
                    </Container>
            </Jumbotron>
          </div>
        );
    }
}
export default App;