import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './contactpage.css'
import { Navbar } from '../components/Navbar';


export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };
  
  
  return (
    <>
    <Navbar/>
      <div className='full_1' id='contact'>
        <h1 className='contact'>CONTACT ME</h1>
        <p>If you have any opportunities for me or would just like to say hi -</p>
          <div className="contact-form_" title='contact-form'>
          <form ref={form} onSubmit={sendEmail} className="card-body card_body">
            <div className="form-group" style={{maxWidth: "400px"}}>
              <label htmlFor="typeText" className="form-label mt-4">Name</label>
              <input type="text" className="form-control" name="from_name" id="typeText" aria-describedby="textHelp" placeholder="Enter Name"/>
            </div>
            <div className="form-group" style={{maxWidth: "400px"}}>
              <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
              <input type="email" className="form-control" name="reply_to" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleTextarea" className="form-label mt-4">Say Hi!</label>
              <textarea className="form-control" name="message" id="exampleTextarea" placeholder=". . ." rows="3" style={{maxWidth: "400px"}}></textarea>
            </div>
        <button type="submit" value="Send" className='btn btn-primary'>Send</button>
        <p className='email'>amenasaher4@gmail.com</p>
        </form>
          </div>
    </div>
    </>
  )
}
