import styled from "styled-components";
import './Contact.css';
import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
  const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-family: 'Roboto Condensed';
  
`;
const Title = styled.h3`
    margin-bottom: 30px;
    font-family: 'Roboto Condensed';
    transition: 0.2s ease all;
    background-color: transparent;
    
  `;
    
    const Payment = styled.img`
    width: 50%;
`;

const Contact = () => {
  const map =
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6775315.518954521!2d9.560763999999999!3d33.98586695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2stn!4v1689590230350!5m2!1sfr!2stn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';

  return (
    <>
      <div className="contact">
      <div className="container">
          <div className="left row">
            <iframe src={map} title="Map"></iframe>
          </div>
          <div className="right row space">
            <h1 className="space">Contact Us</h1>
            <p className="space">We would love to hear from you! </p>
            <div className="items grid2">
                <ContactItem >
                <Room style={{marginRight:"10px"}}/> Tunis al khathra
                </ContactItem>
                 <ContactItem>
                <Phone style={{marginRight:"10px"}}/> +1 234 56 78
                </ContactItem>
                <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> contact@g.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </div>
            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="email" placeholder="Subject" />
              <textarea cols="30" rows="10">
                create a message here ...
              </textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
