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
                    <a href = "https://www.utsouthwestern.edu/" style={{marginLeft: "15%", marginRight: "50px"}}>
                      <img
                        alt=""
                        src="/logo1.png"
                        width="250"
                        height="50"
                        // hspace="130"
                        
                        className="d-inline-block align-top"
                      /> 
                  </a>
                    {' '}
                    <b style = {{fontSize: "25px"}}>North Texas Comprehensive Hemophilia Treatment Center</b>
                    </div>
                  {/*  */}
                </Navbar.Brand>
              </Navbar>
              <Routes/>
            </Router>

            <Jumbotron id="footer" jumbotron-fluid>
                    <Container id="jumboText">
                      <Row>
                        <Col>
                          <br/>
                          <img
                            alt=""
                            src="/bloodLogo2.png"
                            //width="250"
                            //height="50"
                            // hspace="130"
                            style={{marginLeft: "16%", marginRight: "50px", marginTop: "20px"}}
                            className="d-inline-block align-top"
                          />{' '}
                        </Col>
                        <Col>
                        <hr style={{height:"1px", visibility:"hidden" }}/>
                          <h4>Contact Us</h4>
                          <p>
                            (214) 648-5177<br/>
                            (214) 648-1937<br/>
                            After Hours: (214) 645-2800<br/>
                            Fax: (214)-648-4105<br/>
                            <a href="mailto:NorthTexasHTC@utsouthwestern.edu">NorthTexasHTC@utsouthwestern.edu</a>
                          </p>
                        </Col>
                        <Col>
                        <hr style={{height:"1px", visibility:"hidden" }}/>
                          <h4>Hours</h4>
                          <p>
                            Monday - Friday<br/>
                            8:00 am - 5:00 pm<br/>
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