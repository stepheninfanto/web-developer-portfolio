import React from 'react'
import { Col, Form,Input } from 'reactstrap';



function Contact() {
    return (
        <div>
     <section id="contact"  className="contact-section" >
    
      <div className="contact-section-header">
        <h2>Let's work together...</h2>
        {/* <p className="display-6">Wanna Grab a  coffee?</p> */}
        <p className="display-6">Connect with me on </p>

      </div>
      {/* <Form>
      <Col sm={10}>
          <Input type="email" name="email" id="form-text"  />
      </Col>
      </Form> */}

      <div className="contact-links">
        <a
          href="https://facebook.com/stepheninfanto"
          target="_blank" rel="noreferrer"
          className=" contact-details"
          ><i className="fab fa-facebook-square"></i> Facebook</a >
        <a
          id="profile-link"
          href="https://github.com/stepheninfanto"
          target="_blank" rel="noreferrer"
          className=" contact-details"
          ><i className="fab fa-github"></i> GitHub
          </a>  

          <a
          id="profile-link"
          href="https://github.com/stepheninfanto"
          target="_blank" rel="noreferrer"
          className="contact-details"
          ><i className="fab fa-linkedin"></i> LinkedIn
          </a>  

      </div>
    </section>
        </div>
    )
}

export default Contact
