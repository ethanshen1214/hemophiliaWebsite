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

                                <b>Hemophilia A:</b><br/>
                                ReactJS - JavaScript library that simplifies UI development and runs more efficiently by utilizing a virtual DOM and components.<br/>
                                Flask - Python microframework made for building web servers.<br/>
                                MongoDB - NoSQL database that uses JSON-like notation. It is lightweight and easily scalable.<br/><br/>
                                
                                <b>Hemophilia B:</b><br/>
                                Hemophilia B, also called factor IX (FIX) deficiency or Christmas disease, is a genetic disorder caused by missing or defective factor IX, a clotting protein. Although it is passed down from parents to children, about 1/3 of cases are caused by a spontaneous mutation, a change in a gene.
<br/><br/>
According to the US Centers for Disease Control and Prevention, hemophilia occurs in approximately 1 in 5,000 live births. There are about 20,000 people with hemophilia in the US. All races and ethnic groups are affected. Hemophilia B is four times less common than hemophilia A.<br/><br/>
                                
                                <b>Von Willebrand disease:</b><br/>
                                We used Github to share and collaborate on code and maintain version control. <br/>
                                The repository can be found here: <a href="https://github.com/UT-SWLab/TeamE1">https://github.com/UT-SWLab/TeamE1</a>
                            
                                <b>Other clotting factor deficiencies:</b><br/>

                                <b>Congenital platelet disorders:</b><br/>
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
                            
                            <h2>Meet The Team</h2>
                            <br/>
                            <Row>
                                <Col>
                                    <img alt="" src = '/bat-taha.jpg' width="200" />
                                     
                                    <h4>Taha Bat, M.D.</h4>
                                    <p><br/><a href="https://utswmed.org/request-appointment/9111/taha-bat/">Request an Appointment</a></p>
                                     
                                </Col>
                                <Col>
                                    <p>
                                    Taha Bat, M.D., is an Assistant Professor in the Department of Internal Medicine at UT Southwestern Medical Center. He specializes in bone marrow failure syndromes, clonal hematopoiesis, platelet disorders, and cancer-related venous thromboembolism (VTE).

Dr. Bat earned his medical degree at Hacettepe University in Turkey and completed a residency in internal medicine at Western Reserve Health Education. He received advanced training in bone marrow syndromes through a fellowship at the Cleveland Clinic Foundation and in hematology and oncology through a fellowship at the University at Buffalo/Roswell Park Comprehensive Cancer Center.

He joined the UT Southwestern faculty in 2020.

Dr. Bat is Associate Editor of the Open Access Blood Research Transfusion Journal. He is a member of several professional organizations, including the American Society of Clinical Oncology and the American Society of Hematology. In 2016, he was awarded the Edward P. Evans Fellowship Scholarship.

He has published numerous academic articles.
                                    </p>
                                </Col>
                            </Row>
                            <br/>
                            <hr></hr>
                            <br/>
                            <Row>
                                <Col>
                                    <p>
                                    Sandra L. Hofmann, M.D., Ph.D., is a Professor in the Department of Internal Medicine at UT Southwestern Medical Center. She specializes in hematology and oncology.

Dr. Hofmann earned her medical degree and a doctoral degree in molecular biology at Washington University in St. Louis, where she also performed her residency in internal medicine and a fellowship in hematology and oncology. She received advanced training in molecular genetics through a postdoctoral fellowship at UT Southwestern.

Certified by the American Board of Internal Medicine, Dr. Hofmann joined the UT Southwestern faculty in 1989.

Dr. Hofmann’s research interests focus on the metabolism of proteins that are modified by lipids. Her laboratory has conducted pioneering work that has led to a greater understanding of a group of hereditary brain disorders known as the neuronal ceroid lipofuscinoses (NCL, or Batten disease).

She is a member of the American Association for the Advancement of Science, the Association of American Physicians, the American Society for Biochemistry and Molecular Biology, the American Society for Clinical Investigation, and the American Society of Hematology.
                                    </p>
                                </Col>
                                <Col >
                                    <div className="text-right">
                                        <img alt="" src = '/hofmann-sandra.jpg' width="200"/>
                                         
                                        <h4>Sandy Hofmann, M.D., Ph.D.</h4>
                                        <p><br/><a href=""></a></p>
                                    </div>
                                    
                                    
                                </Col>
                            </Row>
                            <br/>
                            <hr></hr>
                            <br/>
                            <Row>
                                <Col>
                                    <img alt="" src = '/ibrahim-ibrahim.jpg' width="200"/>
                                    
                                    <h4>Ibrahim Ibrahim, M.D.</h4>
                                    <p><br/><a href="https://utswmed.org/request-appointment/5937/ibrahim-ibrahim/">Request an Appointment</a></p>
                                </Col>
                                <Col>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Col>
                            </Row>
                            <br/>
                            <hr></hr>
                            <br/>
                            <Row>
                                <Col>
                                Dr. Rambally is originally from Canada, but has called Dallas her home for many years. She received her B.S. in Biochemistry from Southern Methodist University in Dallas, and then went on to medical school at UT Southwestern Medical Center (UTSW). She completed her hematology and medical oncology fellowship at Baylor College of Medicine in Houston, where she developed a strong background in general medical oncology, benign and malignant hematology. 

She was drawn back to UTSW because she enjoys teaching, has an interest in research, and wants to be a part of the long-standing academic excellence which has been a tradition at UTSW. She currently specializes in benign and malignant hematologic disorders. Her clinical practice emphasizes patient and family-centered care. 

She was included in D Magazine's Best Doctors list for 2018.
                                </Col>
                                <Col>
                                    <div className="text-right">
                                        <img alt="" src = '/rambally-siayareh.jpg' width="200"/>
                                        
                                        <h4>Siayareh Rambally, M.D.</h4>
                                        <p><br/><a href="https://utswmed.org/request-appointment/1949/siayareh-rambally/">Request an Appointment</a></p>
                                    </div>
                                    
                                </Col>

                            </Row>
                            <br/>
                            <hr></hr>
                            <br/>
                            <Row>
                                <Col>
                                    <img alt="" src = '/shen-yu.jpg' width="200"/>
                                    
                                    <h4>Yu-Min Shen, M.D.</h4>
                                    <p><br/><a href="https://utswmed.org/request-appointment/1522/yu-shen/">Request an Appointment</a></p>
                                </Col>
                                <Col>
                                Yu-Min Shen, M.D., is a Professor in the Department of Internal Medicine at UT Southwestern Medical Center.

Recognized as the regional expert in coagulation disorders, Dr. Shen is a nonmalignant hematologic disorders specialist whose areas of clinical expertise include bleeding and clotting disorders, hemostasis, and thrombosis.

He serves as Chair of the Pharmacy and Therapeutic Committee’s Anticoagulation Subcommittee at both UT Southwestern and Parkland Hospital, and as Associate Director of the Hematology and Oncology Fellowship Program.

A Fellow of the American College of Physicians, Dr. Shen emigrated from Taiwan as a teenager. He is American Board of Internal Medicine certified in internal medicine, hematology, and oncology.

Dr. Shen was recognized for his excellence as an educator with UT Southwestern’s 2011 Eugene P. Frenkel Outstanding Teacher of the Year Award.

He joined the UT Southwestern faculty in 2004.

Dr. Shen has delivered a number of invited lectures internationally, nationally, and regionally and published more than 20 scholarly articles, chapters, reviews, and case reports. He serves as an ad hoc reviewer for the Journal of Clinical Oncology.

He is a member of professional organizations that include the American Society of Hematology, International Society on Thrombosis and Haemostasis, and Hemophilia and Thrombosis Research Society.

Dr. Shen earned his medical degree at the University of California, San Diego School of Medicine. He completed both an internal medicine residency and a hematology/ oncology fellowship at UT Southwestern.

He also holds a B.S. degree, with honors, in biological sciences from Stanford University.
                                </Col>
                            </Row>
                            <br/>
                            <hr></hr>
                            <br/>
                            <Row>
                                <Col>
                                    <img alt="" src = '/shen-yu.jpg' width="200"/>
                                    
                                    <h4>Tracy Bonebrake, RN, CPHON</h4>
                                    <p><br/><a href=""></a></p>
                                </Col>
                                <Col>
                                    <img alt="" src = '/shen-yu.jpg' width="200"/>
                                    
                                    <h4>Diane Simsuangco, RN</h4>
                                    <p><br/><a href=""></a></p>
                                </Col>
                                <Col>
                                    <img alt="" src = '/shen-yu.jpg' width="200"/>
                                    
                                    <h4>Katherine Lipsky</h4>
                                    <p><br/><a href=""></a></p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img alt="" src = '/shen-yu.jpg' width="200"/>
                                    
                                    <h4>Samantha Frost and colleagues</h4>
                                    <p><br/><a href=""></a></p>
                                </Col>
                                <Col>
                                    <img alt="" src = '/shen-yu.jpg' width="200"/>
                                    
                                    <h4>Phillip Escarsega</h4>
                                    <p><br/><a href=""></a></p>
                                </Col>
                                <Col>
                                    <img alt="" src = '/shen-yu.jpg' width="200"/>
                                    
                                    <h4>Debra Harvey</h4>
                                    <p><br/><a href=""></a></p>
                                </Col>
                            </Row>
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