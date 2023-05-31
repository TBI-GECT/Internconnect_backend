const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModels');
const adminCopy = require("../models/admin");
const nodemailer = require("nodemailer");

router.post('/login', (request, response) => {
  const { email, password } = request.body;

  // Validate user credentials
  adminCopy.findOne({ email, password })
    .then(user => {
      if (user) {
        // User found, proceed with login logic
        response.status(200).json(()=>{alert('login Successfull');});
        // response.redirect('/signup');
      } else {
        // User not found or invalid credentials
        response.status(401).json({ message: 'Invalid Email or Password' });
      }
    })
    .catch(error => {
      response.status(500).json({ message: 'Internal Server Error' });
    });
});

router.post('/', (request, response) => {
  function sendEmail() {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host:"smtp.gmail.com",
      port:465,
      auth: {
        user: "azdi2024@gmail.com",
        pass: "vqsocetcqsizgxta"
      }
    });



    const mailOptions = {
      from: "azdi2024@gmail.com",
      to: request.body.email,
      subject: "Form Submission",
      text: "You have submitted the form successfully.We will reach out to you soon.Thank you"
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error)
      } else {
        console.log("success" + info.response)

      }
    });
  }
              const signedUpUser = new signUpTemplateCopy({
                    firstName: request.body.firstName,
                    lastName: request.body.lastName,
                    email: request.body.email,
                    phone: request.body.phone,
                    college: request.body.college,
                    github: request.body.github,
                    linkedin: request.body.linkedin,
                    branch:request.body.branch,
                    year:request.body.year,
                    webdev: request.body.webdev,
                    appdev: request.body.appdev,
                    ai: request.body.ai,
                    ml: request.body.ml,
                    embedded: request.body.embedded,
                    mech: request.body.mech,
                    java: request.body.java,
                    springboot: request.body.springboot,
                    javascript: request.body.javascript,
                    solidwork: request.body.solidwork,
                    autocad: request.body.autocad,
                    sales:request.body.sales,
                    marketing:request.body.marketing,
                    other:request.body.other,
                    resume: request.body.resume
            });
            signedUpUser.save()
          .then(data => {
            response.status(200).json({ message: 'Form Submitted Successfully' });
            sendEmail();
          })
          .catch(error => {
            response.status(400).json({ message: 'Submission failed due to invalid credentials' });
          });
});
router.get('/adminpanel',async(request,response)=>{
  try{
      const allUserDetails=await signUpTemplateCopy.find({});
      response.send({status:'ok',data:allUserDetails});
  }
  catch(err){
    console.log(err);
  }
})


module.exports = router






