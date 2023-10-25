import { useRef } from "react";
import emailjs, { send } from "@emailjs/browser";
import InputSection from "./InputSection";

function ContactForm() {
  function validateForm() {
    let inputlength = document.getElementsByClassName("input").length;
    //reset default styles
    for (let i=0; i<inputlength; i++){
      let anInput = document.getElementsByClassName("input")[i] as HTMLInputElement;
      anInput.setAttribute("style", "border-color: white; background-color: white;")
        anInput.setAttribute("placeholder", "")
    }


    let num = 0;
    //FIgure out if "valid" is true
    for(let i=0; i<=inputlength-1; i++){
      let anInput = document.getElementsByClassName("input")[i] as HTMLInputElement;
      if(anInput.value !== ""){
        num++
      } else {
        //Change styles here
        anInput.setAttribute("style", "border-color: red; background-color: #e0a2a2;")
        anInput.setAttribute("placeholder", "Fill In The Field")
      }
    }
    if(num < inputlength){
      console.log("Fix unfilled inputs");
      
    } else if (num === inputlength){
      console.log("Run the sendEmail function")
      sendEmail();
    }
  }

  const form: any = useRef();

  const sendEmail = () => {

    emailjs
      .sendForm(
        "service_ig752d9",
        "template_yybutzh",
        form.current!,
        "SFLxiJQnkzg28apJM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    //Just make sure you use user_name, user_email, and message for names. Also add {form} to the ref and {sendEmail} to form onSubmit
    <div className="ContactForm">
      <form id="contact-form" ref={form} onSubmit={sendEmail}>
        <h1>Contact Me!</h1>
        <p>If you're interested in employing me, have a business proposition, or just have a general question, please feel free to send me a message!</p>
        <div id="form-information">
          <InputSection
            label="Name"
            type="text"
            name="user_name"
            id="user_name"
          />
          <InputSection
            label="Email"
            type="text"
            name="user_email"
            placeholder="name@example.com"
            id={"user_email"}
          />
          <InputSection
            label="Subject"
            type="text"
            name="user_subject"
            id="user_subject"
          />
          <p>
            <b>What is the purpose of your inquiry?</b>
          </p>
          <div className="reason">
            <input type="radio" value="Business" name="reason" />
            <label>Business</label>
            <br />
            <input type="radio" value="Employment" name="reason" />
            <label>Employment</label>
            <br />
            <input type="radio" value="General Question" name="reason" />
            <label>Question</label>
            <br />
          </div>
          <div className="inputSection">
            <label>Message</label>
            <textarea name="message" id="message" className="input" />
          </div>
        </div>
      </form>
      <button id="form-submit" onClick={validateForm}>Send Message</button>
    </div>
  );
}

export default ContactForm;
