import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg_icon.png'
import mail_icon from '../../assets/mail_icon.png'
import phone_icon from '../../assets/phone_icon.png'
import location_icon from '../../assets/location_con.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "615bd446-5870-48cb-aaf3-cfc276157ca2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a Message<img src={msg_icon} alt="" /></h3>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
        </p>
        <ul>
          <li> <img src={mail_icon } alt="" />Contact@khennycool.dev</li>
          <li> <img src={phone_icon } alt="" />+234-703-736-1571</li>
          <li> <img src={location_icon} alt="" />Soun Ajagugbade, Estate, Ibadan</li>
          
        </ul>

      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter your name' required />

          <label>Your Email</label>
          <input type="text" name='email' placeholder='Enter your email' required />

          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile number' required />

          <label>Write your masseage here</label>
          <textarea name="massage" rows="6" placeholder='Enter your message' required></textarea>
          
          <button type="submit" className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
