import React from 'react'
import "./contact.css"
import Back from '../components/common/back/Back'
const Contact = () => {
 const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6775315.518954521!2d9.560763999999999!3d33.98586695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2stn!4v1689590230350!5m2!1sfr!2stn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    return (
    <>
    <Back title="Contact Us"/>
    <section className='contact padding'>
        <div className='container shadow flexSB'>
            <div className='left row'>
            <iframe src={map} title="Map"></iframe>
            </div>
            <div className='right row'>
                <h1>Contact Us</h1>
                <p>We would love to hear from you! </p>
                <div className='items grid2'>
                    <div className='box'>
                        <h4>ADDRESS: </h4>
                        <p>monji slim2 ,Makthar</p>
                    </div>
                    <div className='box'>
                     <h4>Email:</h4>
                     <p>contact@gmail.com</p>
                </div>
                <div className='box'>
                     <h4>Phone:</h4>
                     <p>+216     </p>
                </div>
            </div>
            <form action=''>
                <div className='flexSB'>
               
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
</div>
<input type='email' placeholder='Subject' />
                <textarea cols='30' rows='10'>  
                create a message here ...                    
                </textarea>
                <button className='primary-btn'>SEND MESSAGE</button>
            </form>
            <h3>Follow us here</h3>
            <span>FACEBOOK INSTAGRAM LINKEDIN</span>
        </div>
   </div> </section>
    </>
  )
}

export default Contact