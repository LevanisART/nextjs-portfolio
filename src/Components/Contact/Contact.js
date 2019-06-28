import React from 'react';

function Contact() {
  return (
    <div className="d-flex flex-wrap px-2 px-sm-0 px-md-0">
      <div className="col-lg-8 col-md-7 py-2 my-1 pl-0 pr-0 pr-md-3">
        <form action="https://formspree.io/levani.qotolashvili@gmail.com" method="POST">
          <div className="form-input">
            <input type="text" placeholder="Full name" name="name" />
          </div>
          <div className="form-input">
            <input type="email" placeholder="E-mail" name="_replyto" />
          </div>

          <div className="form-input">
            <input type="text" placeholder="Subject" name="subject" />
          </div>

          <div className="form-input">
            <textarea placeholder="Message" name="message"></textarea>
          </div>

          <div className="submit-button">
            <input className="btn" type="submit" value="Submit" />
          </div>
        </form>
      </div>
      <div className="col-lg-4 col-md-5 d-flex flex-column py-2 my-1 pr-0 pl-0 pl-md-2">
        <div className="mb-3 ">
          <div className="contact-item email rounded d-flex align-items-center p-3">
            <i className="fas fa-envelope"></i>
            <div className="d-flex flex-column ml-2">
              <h5>Email</h5>
              <a href="mailto:levani.qotolashvili@gmail.com">levani.qotolashvili@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="mb-3 ">
          <div className="contact-item facebook rounded d-flex align-items-center p-3">
            <i className="fab fa-facebook-square"></i>
            <div className="d-flex flex-column ml-2 pl-1">
              <h5>Facebook</h5>
              <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/LevanisART">LevanisART</a>
            </div>
          </div>
        </div>
        <div className="mb-3 ">
          <div className="contact-item dribbble rounded d-flex align-items-center p-3">
            <i className="fab fa-dribbble"></i>
            <div className="d-flex flex-column ml-2">
              <h5>Dribbble</h5>
              <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/LevanisART">LevanisART</a>
            </div>
          </div>
        </div>
        <div className="mb-2 ">
          <div className="contact-item instagram rounded d-flex align-items-center p-3">
            <i className="fab fa-instagram"></i>
            <div className="d-flex flex-column ml-2 pl-1">
              <h5>Instagram</h5>
              <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/levanis_art">levanis_art</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;