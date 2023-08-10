import styled from "styled-components";
import './Contact.css';
import {  useTheme } from "@mui/material/styles";
import {
    
    MailOutline,
    Phone,
   
    Room,

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
  const map ='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.584864765967!2d10.74376967472897!3d34.74085708105891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1301d3033abc9f7b%3A0x67fc53f889c7a0ac!2sSwiftcode!5e0!3m2!1sfr!2stn!4v1690793185715!5m2!1sfr!2stn" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';
    const theme = useTheme();

  return (
    <>
      <div className="contact" theme={theme}  style={{color:theme.palette.primary.main,backgroundColor:theme.palette.background.main, }}>
      <div className="container" style={{color:theme.palette.primary.main,backgroundColor:theme.palette.background.main}}>
          <div className="left row" style={{color:theme.palette.primary.main,backgroundColor:theme.palette.background.main}}>
            <iframe src={map} title="Map"></iframe>
          </div>
          <div className="right row space" style={{color:theme.palette.primary.main,backgroundColor:theme.palette.background.main,border:`1px solid ${theme.palette.primary.main}`}}>
            <h1 className="space">Contact Us</h1>
            <p className="space">We would love to hear from you! </p>
            <div className="items grid2">
                <ContactItem >
                <Room style={{marginRight:"10px"}}/> Rue Moussa Ibn Nussaier, Sfax 3003
                </ContactItem>
                 <ContactItem>
                <Phone style={{marginRight:"10px"}}/> +216 23 456 789
                </ContactItem>
                <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> swiftcode.contact@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </div>
            <form action=""  style={{color:theme.palette.primary.main,backgroundColor:theme.palette.background.main}}>
              <div className="flexSB" >
                <input type="text" placeholder="Name" style={{backgroundColor:theme.palette.primary.main,color:theme.palette.background.main}} />
                <input type="email" placeholder="Email" style={{backgroundColor:theme.palette.primary.main,color:theme.palette.background.main}} />
              </div>
              <input type="email" placeholder="Subject" style={{backgroundColor:theme.palette.primary.main,color:theme.palette.background.main}}/>
              <textarea cols="30" rows="5" style={{backgroundColor:theme.palette.primary.main,color:theme.palette.background.main}}>
                
              </textarea>
              <button className="primary-btn" style={{backgroundColor:theme.palette.primary.main,color:theme.palette.background.main}}>SEND MESSAGE</button>
            </form>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
