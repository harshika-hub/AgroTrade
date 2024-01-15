import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import React from 'react';
import logo from "../../assets/imagecontactpage.jpg"
import Header from '../Header/Header.js';
// import React from 'react';
import "./ContactUs.css";

function ContactUs() {
    return (
        <>  
            <Header/>
            <div className="container-fluid p-0">
                <Row className="">
                    <Col sm={12}>
                        <Image src={logo} alt="Example Image" className='banner1' fluid />
                    </Col>
                </Row>
            </div>
            <Container>
                <Row>
                    <Col sm={6} className='p-0'>
                        <h2 className="textcolor">Have Any Question?</h2>
                        <p className="textcolor">
                            AgroTrade is an innovative online platform revolutionizing
                            agricultural trade by connecting farmers, factory owners,
                            and buyers in an efficient and transparent marketplace.
                            Our digital ecosystem optimizes land utilization,
                            crop cultivation, and product purchase, fostering a seamless
                            network for agricultural trade and growth.
                        </p>
                        <div>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className="textcolor">Your Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className="textcolor">Your Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Your Email" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className="textcolor">Enter Message</Form.Label>
                                    <Form.Control as="textarea" rows={5} className='fs-6' size="lg" placeholder='Enter Message' />
                                </Form.Group>
                                <div className=" col-12 col-md-12 mt-1 mb-1 p-1">
                                    <div className="d-grid gap-2">
                                        <button type="submit" name="" id="" className="btn btn-success btn1 mt-1">
                                            Send Message
                                        </button>
                                    </div>

                                </div>
                            </Form>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="google-map">
                            <iframe title='AgroTrade' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14719.188998439324!2d75.86501435!3d22.73577615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1702892842353!5m2!1sen!2sin " allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="mt-5">
                            <i className="mt-5 fa-solid fa-phone textcolor"></i>&nbsp;&nbsp;+91574534567
                        </div>
                        <div>
                            <i className="mt-2 fa-solid fa-phone textcolor"></i>&nbsp;&nbsp;+91574534567
                        </div>
                        <div>
                            <i className="fa-solid fa-message mt-2 textcolor"></i>&nbsp;&nbsp;agrotradehelp@gmail.com
                        </div>
                        <div>
                            <i className="fa-solid fa-location-dot mt-2 textcolor"></i>&nbsp;&nbsp;Yashwant Ganj,M.T Cloth Market, Indore,MP.
                        </div>
                        <div>
                            <i className="fa-solid fa-clock mt-2 textcolor"></i>&nbsp;&nbsp;9:00 am to 5:00 pm
                            <br /><p className="ms-4">Monday to Saturday</p>
                        </div>
                    </Col>
                </Row>
                <Row className=" mt-5">
                    <Col sm={12} className="mt-5 justify-content-center align-items-center">
                        <h2 className="text-center textcolor">Follow Us On Social Media</h2>
                        <p className="text-center">Our AgroTeach Web-Application Is To Easy Undarstand To Client And Formers</p>
                        <div className='p-1 text-center'>
                            <i className="fa-brands fa-square-facebook fs-1 m-2 socialicons"></i>
                            <i className="fa-brands fa-square-instagram fs-1 m-2 socialicons"></i>
                            <i className="fa-brands fa-square-twitter fs-1 m-2 socialicons"></i>
                            <i className="fa-brands fa-square-whatsapp fs-1 m-2 socialicons"></i>
                        </div>
                    </Col>
                </Row>
            </Container></>
    );
}

export default ContactUs;