import React from 'react'
import { useRef } from "react";
import emailjs from 'emailjs-com'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {AiOutlineWhatsApp} from 'react-icons/ai'
function Contact() {
  const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_2ed9zs9",
          "template_6cqzisq",
          form.current,
          "zi52R8Qvnug8XSwm9"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset()
    };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Ahmed208087@gmail.com</h5>
            <a
              href="mailto:Ahmed208087@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              send a message
            </a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Ahmed Hussin</h5>
            <a
              href="https://m.me/ahmed.hussin.79656921"
              rel="noreferrer"
              target="_blank"
            >
              send a message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+20 1555434181</h5>
            <a
              href="https://api.whatsapp.com/send?phone=01555434181"
              rel="noreferrer"
              target="_blank"
            >
              send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required>
            {" "}
          </textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact