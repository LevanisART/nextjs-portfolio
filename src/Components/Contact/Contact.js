import React from 'react';

function Contact() {
  return (
    <div class="d-flex flex-wrap px-2 px-sm-0 px-md-0">
      <div class="col-lg-8 col-md-7 py-2 my-1 pl-0 pr-0 pr-md-3">

        <form method="POST" name="contactform" action="https://levanisart.000webhostapp.com/contact.php"> 
          <div class="form-input">
            <input type="text" placeholder="Full name" name="name" />
          </div>
          
          <div class="form-input">
            <input type="text" placeholder="E-mail" name="email" />
          </div>

          <div class="form-input">
            <input type="text" placeholder="Subject" name="subject" />
          </div>
          
          <div class="form-input">
            <textarea placeholder="Message" name="message"></textarea>
          </div>
          <div class="submit-button">
            <input class="btn" type="submit" value="Submit" />
          </div>
        </form>

        <script>
         var frmvalidator  = new Validator("contactform");
         frmvalidator.addValidation("name","req","Please enter your name");
         frmvalidator.addValidation("email","req","Please enter your e-mail");
         frmvalidator.addValidation("email","email","Please enter a valid email address");
         frmvalidator.addValidation("subject","req","Please enter subject");
        </script>

      </div>
      <div class="col-lg-4 col-md-5 d-flex flex-column py-2 my-1 pr-0 pl-0 pl-md-2">
        <div className="mb-3 ">
          <div class="contact-item email rounded d-flex align-items-center p-3">
            <i class="fas fa-envelope"></i>
            <div class="d-flex flex-column ml-2">
              <h5>Email</h5>
              <a href="mailto:levani.qotolashvili@gmail.com">levani.qotolashvili@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="mb-3 ">
          <div class="contact-item facebook rounded d-flex align-items-center p-3">
            <i class="fab fa-facebook-square"></i>
            <div class="d-flex flex-column ml-2 pl-1">
              <h5>Facebook</h5>
              <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/LevanisART">LevanisART</a>
            </div>
          </div>
        </div>
        <div className="mb-3 ">
          <div class="contact-item dribbble rounded d-flex align-items-center p-3">
            <i class="fab fa-dribbble"></i>
            <div class="d-flex flex-column ml-2">
              <h5>Dribbble</h5>
              <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/LevanisART">LevanisART</a>
            </div>
          </div>
        </div>
        <div className="mb-2 ">
          <div class="contact-item instagram rounded d-flex align-items-center p-3">
            <i class="fab fa-instagram"></i>
            <div class="d-flex flex-column ml-2 pl-1">
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