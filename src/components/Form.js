import "./FormStyles.css";
import dogGif from "../assets/dogwave.gif";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Socials from "../Socials/Socials";
import LeftContactImg from "../contactImages/LeftContactImg";


const Form = () => {
  const form = useRef();

  var [need_txt, setNeedText] = useState('');
  var hold_message = "";

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");


  
  const sendEmail = (e) => {
    e.preventDefault();
    var hold_message = "";
    if(document.getElementById("Name").value.split(' ').join('')=='')
    {
      hold_message = hold_message + "Name";
    }
    if(document.getElementById("Email").value.split(' ').join('')=='')
    {
      if(hold_message == ""){
        hold_message = hold_message + "Email";
      } else {
        hold_message = hold_message + ", Email";
      }
    }
    if(document.getElementById("Message").value.split(' ').join('')=='')
    {
      if(hold_message == ""){
        hold_message = hold_message + "Message";
      } else {
        hold_message = hold_message + ", Message";
      }
    }
    if (hold_message == ""){
      /*emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')*/
      /* keep commented while testing; uncomment when deploy website */
      emailjs.sendForm("", "", form.current, "")
      .then((result) => {
          console.log(result.text);
          console.log("email sent!");
      }, (error) => {
          console.log(error.text);
      });

      setNeedText("Message sent!");
      setTimeout(() => {setNeedText(""); }, 4000);
      /*Clear the text fields */
      resetInputFields();
    } else{
      setNeedText("Missing: \n" + hold_message);
    }
  };

  const handleNameInput = (e) => {
    setNameInput(e.target.value);
  };

  const handleEmailInput = (e) => {
    setEmailInput(e.target.value);
  };

  const handleMessageInput = (e) => {
    setMessageInput(e.target.value);
  };

  const resetInputFields = () => {
    setNameInput("");
    setEmailInput("");
    setMessageInput("");
    /* make sure doesnt add text - want it to clear so placeholder comes back*/
  };

  return (
    <div class="grid-container3">
      <div class="item1">
        <h3 id="letschat" className="ContactUs">Let's Chat!</h3>
        <h2 id="sendme">Send us a message or a recipe!</h2>
      </div>
      <div class="item2">
        <LeftContactImg/>
      </div>

      <div class="item3">
      <form ref={form} onSubmit={sendEmail} className="forminput">
        <input type="text" name="name" id="Name" placeholder="Name *" value={nameInput} onChange={handleNameInput}/>
        <input type="email" name="email" id="Email" placeholder="Email *" value={emailInput} onChange={handleEmailInput}/>
        <textarea rows="4" name="message" id="Message" placeholder="Message*" value={messageInput} onChange={handleMessageInput}/>
        <input type="submit" className="btnSend" id="Send" value="Send"/>

        {/*<button type="submit" className="btnSend" id="Send">Send</button>*/}
      </form>
      <h5 id="warning-txt" style={{color: need_txt === "Message sent!" ? "#228B22" : "red"}}>{need_txt}</h5>
      </div>
    </div>       
      
  )
}

export default Form;