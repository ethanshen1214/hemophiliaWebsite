import React, {Component} from 'react';
import '../App.css';
import './home.css';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';


//https://i.pinimg.com/originals/c9/9d/1b/c99d1b83118fc881c9a84e7797a4a0c4.jpg
export default class Home extends Component {
    render() {  //landing page

        return (
            
            <div>
                <Container>
                    <Col md={{ span: 10, offset: 1 }}>
                    {/* <br/> */}
                    {/* <h1>North Texas Comprehensive Hemophilia Treatment Center - Adult Program</h1> */}
                    <br/>
                    <Tabs defaultActiveKey="general" id="uncontrolled-tab-example">
                        <Tab eventKey="general" title="General">
                            <br/>
                            <img alt="" src="/team1.jpg" style={{width: '100%'}}></img>
                            <br/>
                            <br/>
                            <h2>About</h2>
                            <p>
                                The North Texas Comprehensive Hemophilia Treatment Center-Adult Program is the only adult-focused hemophilia treatment center in Texas. 
                                We have the expertise to care for adults with all types of congenital bleeding disorders. 
                                Bleeding disorders can result from defective or deficient clotting factors, platelets, or abnormal blood vessel wall, leading to excessive bleeding or bruising, spontaneously or as a result of injuries. 
                                Occasionally bleeding can also result from acquired defects in the clotting system.
                                <br/><br/>
                                Hemophilia Treatment Centers (HTC) are federally-funded to provide access to multidisciplinary health care professionals with the comprehensive care model for patients with congenital bleeding disorders. 
                                A CDC study of 3000 persons with hemophilia showed that those who were cared for by an HTC were 40% less likely to die of a hemophilia-related complication compared to those who did not receive care at an HTC<sup>1</sup>. 
                                Similarly, patients treated by HTC were 40% less likely to be hospitalized for bleeding complications<sup>2</sup>. 
                                In addition to providing state-of-the-art care to patients with bleeding disorders, we also participate in research endeavors in partnership with other HTCs as well as pharmaceutical industry to advance knowledge and hopefully impact health practices for bleeding disorders.
                                <br/><br/><br/>
                                <hr></hr>
                                1) &nbsp;Soucie JM, Nuss R, Evatt, B, Abdelhak A, Cowan L, Hill H, Kolakoski M, Wilber N, and the Hemophilia Surveillance System &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Project Investigators. Mortality among males with hemophilia: relations with source of medical care. Blood 2000; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;96:437-442.
                                <br/><br/>
                                2) &nbsp;Soucie JM, Symons J, Evatt B, Brettler D, Huszti H, Linden J, and the Hemophilia Surveillance System Project Investigators. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home-based factor infusion therapy and hospitalization for bleeding complications among males with hemophilia. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Haemophilia 2001; 7:198-206.
                                <hr></hr>
                            </p>
                        </Tab>
                        <Tab eventKey="whatWeTreat" title="What We Treat">
                            <br/>
                            <h2>What We Treat</h2>
                            <p>
                                <b>Hemophilia A:</b><br/>
                                    Hemophilia A, also called factor VIII (8) deficiency or classic hemophilia, is a genetic disorder caused by missing or defective factor VIII (FVIII), a clotting protein. 
                                    Although it is passed down from parents to children, about 1/3 of cases found have no previous family history.
                                    <br/><br/>
                                    According to the US Centers for Disease Control and Prevention (CDC), hemophilia occurs in approximately 1 in 5,617 live male births. 
                                    There are between 30,000 – 33,000 males with hemophilia in the US*.  
                                    More than half of people diagnosed with hemophilia A have the severe form. 
                                    Hemophilia A is four times as common as hemophilia B. Hemophilia affects all races and ethnic groups.
                                <br/><a href = "https://www.hemophilia.org/bleeding-disorders-a-z/types/hemophilia-a">https://www.hemophilia.org/bleeding-disorders-a-z/types/hemophilia-a</a><br/><br/><br/>                                
                                
                                <b>Hemophilia B:</b><br/>
                                    Hemophilia B, also called factor IX (FIX) deficiency or Christmas disease, is a genetic disorder caused by missing or defective factor IX, a clotting protein. 
                                    Although it is passed down from parents to children, about 1/3 of cases are caused by a spontaneous mutation, a change in a gene.
                                    <br/><br/>
                                    According to the US Centers for Disease Control and Prevention, hemophilia occurs in approximately 1 in 5,000 live births. 
                                    There are about 20,000 people with hemophilia in the US. 
                                    All races and ethnic groups are affected. Hemophilia B is four times less common than hemophilia A.
                                <br/><a href = "https://www.hemophilia.org/bleeding-disorders-a-z/types/hemophilia-b">https://www.hemophilia.org/bleeding-disorders-a-z/types/hemophilia-b</a><br/><br/><br/>                                
                                
                                <b>Von Willebrand disease:</b><br/>
                                    Von Willebrand disease (VWD) is an inheritable bleeding disorder. 
                                    Many different proteins are needed to make a person’s blood clot successfully. 
                                    People with VWD are either missing or low in the clotting protein von Willebrand factor (VWF) – or it doesn’t work as it’s supposed to. 
                                    For a person to make a successful clot, VWF binds to factor VIII (8), another clotting protein, and platelets in blood vessel walls. 
                                    This process will help form a platelet plug during the clotting process. 
                                    People with VWD are not able to form this platelet plug, or it will take longer to form. 
                                    The condition is named after Finnish physician Erik von Willebrand, who first described it in the 1920s.
                                    <br/><br/>
                                    VWD is the most common bleeding disorder, affecting up to 1% of the US population – or approximately 1 in every 100 people. 
                                    It occurs equally in men and women. However, women may be more symptomatic due to heavy menstrual bleeding (periods). 
                                    VWD occurs equally across all races and ethnicities.
                                <br/><a href = "https://www.hemophilia.org/bleeding-disorders-a-z/types/von-willebrand-disease">https://www.hemophilia.org/bleeding-disorders-a-z/types/von-willebrand-disease</a><br/><br/><br/>                                
                                
                                <b>Other clotting factor deficiencies:</b><br/>
                                    The process of forming a blood clot to stop bleeding is called hemostasis, and involves many different blood proteins called clotting factors. 
                                    A patient could have a bleeding disorder due to deficiency or defect of one or more of the other clotting factors other than factor VIII, factor IX, or von Willebrand factor.  
                                    At our HTC, we also have patients with problems with their fibrinogen, factor VII, or factor XI. All of these are rare disorders. 
                                    {/* <br/><br/>
                                    Blood clotting is a complex process, involving many different proteins, called factors, each of which plays a different role in the blood clotting process. 
                                    Factor deficiencies are defined by which specific clotting protein in the blood protein is low, missing or doesn't work properly. */}
                                <br/><a href = "https://www.hemophilia.org/bleeding-disorders-a-z/types/other-factor-deficiencies">https://www.hemophilia.org/bleeding-disorders-a-z/types/other-factor-deficiencies</a><br/><br/><br/>                                 
                                
                                <b>Congenital platelet disorders:</b><br/>
                                    Platelets play an important role in blood clotting, so when a person has a low number of platelets, too many platelets or their platelets don’t work the way they should, they have a platelet disorder. 
                                    People with platelet disorders take longer to stop bleeding.
                                    <br/><br/>
                                    Platelets are tiny, irregularly shaped blood cell pieces (called fragments) that play an important role in the making of blood clots. 
                                    When an injury occurs and a blood clot is needed, the platelets become sticky and help plug the site of the injury. 
                                    They attract other proteins needed in the clotting process and they help form a stable clot. 
                                    There are several ways that platelets may not work properly, which result in platelet disorders. 
                                    Some platelet disorders are not fully understood and may result in a diagnosis of an "unspecified platelet disorder."
                                <br/><a href = "https://www.hemophilia.org/bleeding-disorders-a-z/types/inherited-platelet-disorders">https://www.hemophilia.org/bleeding-disorders-a-z/types/inherited-platelet-disorders</a><br/><br/><br/> 
                                
                                <b>Additional Resources:</b><br/>
                                <a href="https://www.hemophilia.org/">https://www.hemophilia.org/</a>
                            </p>
                            <br/>
                        </Tab>
                        <Tab eventKey="theTeam" title="The Team">
                            <br/>
                            <h2>Meet The Team</h2>
                            <br/>
                            <h3>Staff</h3>
                            <Row>
                                <Col>
                                    <img alt="" src = '/TracyBonebrake.jpg' width="200"/>
                                    <h4>Tracy Bonebrake, RN, BS</h4>
                                    <p>Program Manager<br/>214-648-1937</p>
                                </Col>
                                <Col>
                                    <img alt="" src = '/DianeSimsuangco.jpg' width="200"/>
                                    <h4>Diane Simsuangco, RN, MN</h4>
                                    <p>Hemophilia Nurse<br/>214-648-3049</p>
                                </Col>
                                <Col>
                                    <img alt="" src = '/KatherineLipsky.jpg' width="200"/>
                                    <h4>Katherine Lipsky, LCSW, ACSW</h4>
                                    <p>Social Worker<br/>214-648-5177</p>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                                    <img alt="" src = '/samantha.jpg' width="200"/>
                                    <h4>Samantha Frost, PT, DPT</h4>
                                    <p><br/></p>
                                </Col>
                                <Col>
                                    <img alt="" src = '/PhillipEscarsega.jpg' width="200"/>
                                    <h4>Phillip Escarsega, MS</h4>
                                    <p>Clinical Research Coordinator<br/>214-648-3019</p>
                                </Col>
                                <Col>
                                    <img alt="" src = '/DebraHarvey.jpg' width="200"/>
                                    <h4>Debra Harvey, BBA</h4>
                                    <p>Administrative Assistant<br/>214-648-1939</p>
                                </Col>
                            </Row>
                            <hr></hr>
                            <h3>Physicians</h3>
                            <Row>
                                <Col>
                                    <img alt="" src = '/bat-taha.jpg' width="200" />
                                    <h4>Taha Bat, M.D.</h4>
                                    <p><br/></p>
                                </Col>
                                <Col>
                                    Taha Bat, M.D., is an Assistant Professor in the Department of Internal Medicine at UT Southwestern Medical Center. 
                                    He specializes in bone marrow failure syndromes, clonal hematopoiesis, platelet disorders, and cancer-related venous thromboembolism (VTE).
                                    Dr. Bat earned his medical degree at Hacettepe University in Turkey and completed a residency in internal medicine at Western Reserve Health Education. 
                                    He received advanced training in bone marrow syndromes through a fellowship at the Cleveland Clinic Foundation and in hematology and oncology through a fellowship at the University at Buffalo/Roswell Park Comprehensive Cancer Center.
                                    He joined the UT Southwestern faculty in 2020.
                                    Dr. Bat is Associate Editor of the Open Access Blood Research Transfusion Journal. 
                                    He is a member of several professional organizations, including the American Society of Clinical Oncology and the American Society of Hematology. 
                                    In 2016, he was awarded the Edward P. Evans Fellowship Scholarship.
                                    He has published numerous academic articles.
                                </Col>
                            </Row>
                            <br/>
                            <hr></hr>
                            <br/>
                            <Row>
                                <Col>
                                    Sandra L. Hofmann, M.D., Ph.D., is a Professor in the Department of Internal Medicine at UT Southwestern Medical Center. She specializes in hematology and oncology.
                                    Dr. Hofmann earned her medical degree and a doctoral degree in molecular biology at Washington University in St. Louis, where she also performed her residency in internal medicine and a fellowship in hematology and oncology. 
                                    She received advanced training in molecular genetics through a postdoctoral fellowship at UT Southwestern.
                                    Certified by the American Board of Internal Medicine, Dr. Hofmann joined the UT Southwestern faculty in 1989.
                                    Dr. Hofmann’s research interests focus on the metabolism of proteins that are modified by lipids. 
                                    Her laboratory has conducted pioneering work that has led to a greater understanding of a group of hereditary brain disorders known as the neuronal ceroid lipofuscinoses (NCL, or Batten disease).
                                    She is a member of the American Association for the Advancement of Science, the Association of American Physicians, 
                                    the American Society for Biochemistry and Molecular Biology, the American Society for Clinical Investigation, and the American Society of Hematology.
                                </Col>
                                <Col >
                                    <div className="text-right">
                                        <img alt="" src = '/hofmann-sandra.jpg' width="200"/>
                                        <h4>Sandy Hofmann, M.D., Ph.D.</h4>
                                        <p><br/></p>
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
                                    <p><br/></p>
                                </Col>
                                <Col>
                                    Dr. Ibrahim graduated from the University of Texas Southwestern Medical School in 2007 and subsequently completed internal medicine residency and hematology/oncology training at UT Southwestern. 
                                    After completion of fellowship, he focused his clinical practice exclusively in hematology at the Houston Medical Center developing an interest for thrombosis, hemostasis, and thrombocytopenic disorders (HIT, ITP, and TTP).   
                                    Dr. Ibrahim’s interests outside of medicine include family, tennis, reading and travel.
                                </Col>
                            </Row>
                            <br/>
                            <hr></hr>
                            <br/>
                            <Row>
                                <Col>
                                    Dr. Rambally is originally from Canada, but has called Dallas her home for many years. 
                                    She received her B.S. in Biochemistry from Southern Methodist University in Dallas, and then went on to medical school at UT Southwestern Medical Center (UTSW). 
                                    She completed her hematology and medical oncology fellowship at Baylor College of Medicine in Houston, where she developed a strong background in general medical oncology, benign and malignant hematology. 
                                    She was drawn back to UTSW because she enjoys teaching, has an interest in research, and wants to be a part of the long-standing academic excellence which has been a tradition at UTSW. 
                                    She currently specializes in benign and malignant hematologic disorders. Her clinical practice emphasizes patient and family-centered care. 
                                    She was included in D Magazine's Best Doctors list for 2018.
                                </Col>
                                <Col>
                                    <div className="text-right">
                                        <img alt="" src = '/rambally-siayareh.jpg' width="200"/>
                                        <h4>Siayareh Rambally, M.D.</h4>
                                        <p><br/></p>
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
                                    <p><br/></p>
                                </Col>
                                <Col>
                                    Yu-Min Shen, M.D., is a Professor in the Department of Internal Medicine at UT Southwestern Medical Center.
                                    Recognized as the regional expert in coagulation disorders, Dr. Shen is a nonmalignant hematologic disorders specialist whose areas of clinical expertise include bleeding and clotting disorders, hemostasis, and thrombosis.
                                    A Fellow of the American College of Physicians, Dr. Shen emigrated from Taiwan as a teenager. He is American Board of Internal Medicine certified in internal medicine, hematology, and oncology.
                                    Dr. Shen was recognized for his excellence as an educator with UT Southwestern’s 2011 Eugene P. Frenkel Outstanding Teacher of the Year Award.
                                    Dr. Shen has delivered a number of invited lectures internationally, nationally, and regionally and published more than 20 scholarly articles, chapters, reviews, and case reports. 
                                    He serves as an ad hoc reviewer for the Journal of Clinical Oncology.
                                    He is a member of professional organizations that include the American Society of Hematology, International Society on Thrombosis and Haemostasis, and Hemophilia and Thrombosis Research Society.
                                    Dr. Shen earned his medical degree at the University of California, San Diego School of Medicine. He completed both an internal medicine residency and a hematology/ oncology fellowship at UT Southwestern.
                                    He also holds a B.S. degree, with honors, in biological sciences from Stanford University.
                                </Col>
                            </Row>
                            {/* <br/>
                            <hr></hr>
                            <br/>
                            <Row>
                                <Col>
                                    Dr. Rambally is originally from Canada, but has called Dallas her home for many years. 
                                    She received her B.S. in Biochemistry from Southern Methodist University in Dallas, and then went on to medical school at UT Southwestern Medical Center (UTSW). 
                                    She completed her hematology and medical oncology fellowship at Baylor College of Medicine in Houston, where she developed a strong background in general medical oncology, benign and malignant hematology. 
                                    She was drawn back to UTSW because she enjoys teaching, has an interest in research, and wants to be a part of the long-standing academic excellence which has been a tradition at UTSW. 
                                    She currently specializes in benign and malignant hematologic disorders. Her clinical practice emphasizes patient and family-centered care. 
                                    She was included in D Magazine's Best Doctors list for 2018.
                                </Col>
                                <Col>
                                    <div className="text-right">
                                        <img alt="" src = '/rambally-siayareh.jpg' width="200"/>
                                        <h4>Natalie Bavli, M.D.</h4>
                                        <p><br/></p>
                                    </div>
                                </Col>
                            </Row> */}
                        </Tab>
                        <Tab eventKey="location" title="Location">
                            <Row>
                            <img alt="" src="/building.jpg" style={{width: '100%'}}></img>
                            </Row>
                            <Row>
                                <Col>
                                    <br/>
                                    <div >
                                        <h3>West Campus Building 3 (WCB3) - UT Southwestern</h3>
                                        <p>2001 Inwood Rd, 9th floor
                                            <br/>Dallas, TX 75390</p>
                                        
                                        <iframe
                                            width="100%"
                                            height="400"
                                            frameborder="0" 
                                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAJeKNaqhS_mnSgskl7s7VNjIcNUYs_1Eo&q=West+Campus+Building+3+(WCB3)+-+UT+Southwestern" allowfullscreen>
                                        </iframe>
                                    </div>
                                </Col>
                                <Col>
                                    <br/>
                                    <div >
                                        <h3>Moody Outpatient Center at Parkland Hospital</h3>
                                        <p>5151 Maple Ave, 3rd floor
                                            <br/>Dallas, TX 75235</p>
                                            
                                        <iframe
                                            width="100%"
                                            height="400"
                                            frameborder="0" 
                                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAJeKNaqhS_mnSgskl7s7VNjIcNUYs_1Eo&q=Moody+Outpatient+Center+at+Parkland+Hospital" allowfullscreen>
                                        </iframe>
                                    </div>
                                </Col>
                            </Row>
                            
                        </Tab>
                        <Tab eventKey="otherResources" title="Other Resources">
                            <br/>
                            <h2>Additional Resources</h2>
                            <p>
                                a.	World Federation of Hemophilia: <a href = "https://www.wfh.org/en/home">https://www.wfh.org/en/home</a> <br/>
                                b.	International Society of Thrombosis and Hemostasis: <a href = "https://www.isth.org/">https://www.isth.org/</a>  <br/>
                                c.	National Hemophilia Foundation: <a href = "https://www.hemophilia.org/">https://www.hemophilia.org/</a> <br/>
                                d.	Hemophilia Federation of America: <a href = "https://www.hemophiliafed.org/">https://www.hemophiliafed.org/</a> <br/>
                                e.	Texas Central Bleeding Disorders: <a href = "https://texcen.org/">https://texcen.org/</a>  <br/>
                                f.	Hemophilia Alliance: <a href = "https://hemoalliance.org/">https://hemoalliance.org/</a> <br/>
                            </p>
                        </Tab>
                    </Tabs> 
                    </Col>
                    
                </Container>
            </div>
            
            
        );
    }
}