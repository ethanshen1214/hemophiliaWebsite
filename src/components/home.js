import React, {Component} from 'react';
import '../App.css';
import './home.css';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
//import { Jumbotron, Container, Card, CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CardActionArea } from '@material-ui/core';

//https://i.pinimg.com/originals/c9/9d/1b/c99d1b83118fc881c9a84e7797a4a0c4.jpg
export default class Home extends Component {
    render() {  //landing page

        var homepage = {
            backgroundImage: "url(https://i.pinimg.com/originals/35/44/d3/3544d3bf4b6f2d08c382298ff0e9e3f6.jpg)",
        };

        return (
            
            <div>
                <Container>
                    <Col md={{ span: 10, offset: 1 }}>
                    <br/>
                    <h1>North Texas Comprehensive Hemophilia Treatment Center - Adult Program</h1>
                    <br/>
                    <Tabs defaultActiveKey="general" id="uncontrolled-tab-example">
                        <Tab eventKey="general" title="General">
                            <br/>
                            <img alt="" src="/microscopes.jpg" style={{width: '100%'}}></img>
                            <br/>
                            <br/>
                            <h2>About</h2>
                            <p>
                                This site is designed to make finding travel destinations easier. 
                                It makes connections between landmarks, cities, and countries, which helps travellers make more informed decisions on vacation.
                                Our goal is to centralize all the common travel data sets and make meaningful connections between them to help the average vacation-goer plan the best possible vacation.
                                <br/><br/>
                                Users will be able to search through a list of countries, cities, or landmarks to find vacation destinations.
                                After finding a particular country, city, or landmark, the user will be presented with information about that location as well as connections to the other two models.
                                For example, if a user clicks on The Pyramids of Giza, they will find information on the pyramids along with links to the city of Cairo and the Country of Egypt.
                            </p>
                        </Tab>
                        <Tab eventKey="whatWeTreat" title="What We Treat">
                            <br/>
                            <h2>Tools Used</h2>
                            <p>
                                Our stack consists of ReactJS for the front end, Flask for the API, and MongoDB for the database.
                                In addition to these main technologies, we also used React-Bootstrap to integrate the bootstrap library 
                                with our front end as well as Axios to make API calls to our Flask server.<br/><br/>

                                <b>Stack Technologies:</b><br/>
                                ReactJS - JavaScript library that simplifies UI development and runs more efficiently by utilizing a virtual DOM and components.<br/>
                                Flask - Python microframework made for building web servers.<br/>
                                MongoDB - NoSQL database that uses JSON-like notation. It is lightweight and easily scalable.<br/><br/>
                                
                                <b>Additional Technologies:</b><br/>
                                React-Bootstrap - A CSS library that simplifies styling components. Specifically adapted to work with ReactJS.<br/>
                                Axios - A tool for making API calls from a React app.<br/><br/>
                                
                                <b>Github:</b><br/>
                                We used Github to share and collaborate on code and maintain version control. <br/>
                                The repository can be found here: <a href="https://github.com/UT-SWLab/TeamE1">https://github.com/UT-SWLab/TeamE1</a>
                            </p>
                            <br/>
                            <h2>Data Sources</h2>
                            <p>The data from these APIs were acquired by making a the appropriate calls to the remote APIs with our backend server 
                                and stored into our MongoDB database. 
                                The React front end will then make Axios calls to our Flask API to grab the data from MongoDB and display it on the page.</p>
                            <a href="https://restcountries.eu/">https://restcountries.eu/</a>
                            <br/><a href="https://www.sygic.com/developers/sygic-travel/sygic-travel-api/places">https://www.sygic.com/developers/sygic-travel/sygic-travel-api/places</a>
                            <br/><a href="https://unsplash.com/developers">https://unsplash.com/developers</a>
                            <br/>
                            <br/>
                        </Tab>
                        <Tab eventKey="theTeam" title="The Team">
                            <br/>
                            <h2>Team E1</h2><br/>
                            <h2>Group Members</h2>
                            <Row>
                                <Col>
                                    <img alt="" src = 'https://i.pinimg.com/564x/0b/b2/1e/0bb21e1b4b2f688694980fa2fb8656b5.jpg' width="200" />
                                    
                                    <h4>Ethan Shen</h4>
                                    <p>ECE Major, Software Engineering<br/><a href="mailto:ethanshen1214@gmail.com">ethanshen1214@gmail.com</a></p>
                                    <p>
                                        Ethan is a sophomore Electrical and Computer Engineering student at the University of Texas at Austin.  
                                        Born and raised in Plano, Ethan is a true Texan at heart.
                                        Aside from coding, playing instruments, and two stepping, 
                                        you can often find him in the workshop building/repairing things or spending time exploring the outdoors.
                                    </p>
                                </Col>
                                <Col>
                                    <img alt="" src = 'https://i.pinimg.com/originals/6a/7a/10/6a7a1065e3d5040c3de007ac9392057e.jpg' width="200"/>
                                    
                                    <h4>Tyler Kapadia</h4>
                                    <p>ECE Major, Software Engineering<br/><a href="mailto:tyler@fastram.com">tyler@fastram.com</a></p>
                                    <p>
                                        Hello, my name is Tyler! I am a Junior ECE Student from Dallas, TX. 
                                        I am experienced with Python and Data Visualization Software (Power BI)! Some random bullshit. 
                                        One interesting fact about me is that I love to cook and try new recipes.
                                    </p>
                                </Col>
                                <Col>
                                    <img alt="" src = 'https://i.pinimg.com/originals/26/6c/a2/266ca21b8b62e353632f59aa9b1ce66d.jpg' width="200"/>
                                    
                                    <h4>Alexander Liu</h4>
                                    <p>ECE Major, Software Engineering<br/><a href="mailto:liu.alexander.22@gmail.com">liu.alexander.22@gmail.com</a></p>
                                    <p>
                                        Hi! I’m Alex, a junior ECE student from South Texas. 
                                        In my free time, I enjoy venture capital work, playing 8-ball pool, 
                                        and spending an unhealthy amount of money on clothes.
                                    </p>
                                
                                </Col>
                                <Col>
                                    <img alt="" src = 'https://i.pinimg.com/originals/47/25/37/47253733d235b71a604c7904e587065b.jpg' width="200"/>
                                    
                                    <h4>Matteo Agius-D'Arrigo</h4>
                                    <p>ECE Major, Software Engineering<br/><a href="mailto:magius@utexas.edu">magius@utexas.edu</a></p>
                                    <p>
                                        Matteo is a junior Electrical and Computer Engineering major at the University of Texas at Austin
                                        focusing on software engineering and design. He loves all things sports, 
                                        and you will often find him on the field with the UT Austin Men's soccer team.
                                    </p>
                                </Col>
                            </Row>
                            <h2>Responsibilities</h2>
                            <p>
                                Ethan: Backend, Frontend<br/>
                                Tyler: UI Development, PM<br/>
                                Alex: Backend, API, and Frontend Development<br/>
                                Matteo: Backend, frontend, database design<br/>
                            </p>
                        </Tab>
                        <Tab eventKey="location" title="Location">
                            <br/>
                            <h2>About</h2>
                            <p>
                                This site is designed to make finding travel destinations easier. 
                                It makes connections between landmarks, cities, and countries, which helps travellers make more informed decisions on vacation.
                                Our goal is to centralize all the common travel data sets and make meaningful connections between them to help the average vacation-goer plan the best possible vacation.
                                <br/><br/>
                                Users will be able to search through a list of countries, cities, or landmarks to find vacation destinations.
                                After finding a particular country, city, or landmark, the user will be presented with information about that location as well as connections to the other two models.
                                For example, if a user clicks on The Pyramids of Giza, they will find information on the pyramids along with links to the city of Cairo and the Country of Egypt.
                            </p>
                        </Tab>
                        <Tab eventKey="otherResources" title="Other Resources">
                            <br/>
                            <br/>
                            <br/>
                            <h2>About</h2>
                            <p>
                                This site is designed to make finding travel destinations easier. 
                                It makes connections between landmarks, cities, and countries, which helps travellers make more informed decisions on vacation.
                                Our goal is to centralize all the common travel data sets and make meaningful connections between them to help the average vacation-goer plan the best possible vacation.
                                <br/><br/>
                                Users will be able to search through a list of countries, cities, or landmarks to find vacation destinations.
                                After finding a particular country, city, or landmark, the user will be presented with information about that location as well as connections to the other two models.
                                For example, if a user clicks on The Pyramids of Giza, they will find information on the pyramids along with links to the city of Cairo and the Country of Egypt.
                            </p>
                        </Tab>
                    </Tabs> 
                    </Col>
                    
                </Container>
            </div>
            
            
        );
    }
}