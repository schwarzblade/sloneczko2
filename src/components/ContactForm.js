import React, { Component } from "react";
import { FaRoad, FaPhone, FaEnvelope, FaDollarSign } from "react-icons/fa";
import Recaptcha from "react-recaptcha";

export default class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    isVerifide: false,
    buttonText: "wyslij",
  };

  render() {
    return (
      <div className="container">
        <div className="wrapper animated bounceInLeft">
          <div className="company-info">
            <h3>Adres:</h3>
            <ul>
              <li>
                <FaRoad /> Mszana Dolna ul.Stawowa 35
              </li>
              <li>
                <FaPhone /> (018)331-01-99 kom.694-842-268
              </li>
              <li>
                <FaEnvelope /> sloneczko.mszana@gmail.com
              </li>
            </ul>
            <h3>Nr konta:</h3>
            <ul>
              <FaDollarSign className="dolar" />
              <li className="marginLeft">PKO Bank Polski SA</li>
              <li className="marginLeft">21 1020 3453 0000 8302 0303 2273</li>
            </ul>
          </div>
          <div className="contact">
            <h3>Napisz do nas!</h3>
            <form onSubmit={(e) => this.formSubmit(e)}>
              <p>
                <label>Imię</label>
                <input
                  id="nameValid"
                  type="text"
                  name="name"
                  onChange={(e) => this.setState({ name: e.target.value })}
                  value={this.state.name}
                />
              </p>
              <p>
                <label>Twój Email</label>
                <input
                  id="emailValid"
                  type="email"
                  name="email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                  value={this.state.email}
                />
              </p>
              <p className="full">
                <label>Wiadomość</label>
                <textarea
                  id="messageValid"
                  name="message"
                  rows="5"
                  onChange={(e) => this.setState({ message: e.target.value })}
                  value={this.state.message}
                ></textarea>
              </p>
              <p className="recaptcha" id="recaptcha">
                <Recaptcha
                  sitekey="6LcAZLYZAAAAAHkDi3sEZ8m9sNqJ4S-vFZWUTbLE"
                  render="explicit"
                  onloadCallback={this.recaptchaLoaded}
                  verifyCallback={this.verifyCallback}
                />
              </p>
              <p className="full">
                <button>{this.state.buttonText}</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }

  validForm = (state) => {
    const { name, email, message, isVerifide } = state;
    console.log(name.length);
    if (name.length === 0) {
      document.getElementById("nameValid").classList.add("formError");
      setTimeout(() => {
        document.getElementById("nameValid").classList.remove("formError");
      }, 3000);
    }
    if (email.length === 0) {
      document.getElementById("emailValid").classList.add("formError");
      setTimeout(() => {
        document.getElementById("emailValid").classList.remove("formError");
      }, 3000);
    }
    if (message.length === 0) {
      document.getElementById("messageValid").classList.add("formError");
      setTimeout(() => {
        document.getElementById("messageValid").classList.remove("formError");
      }, 3000);
    }
    if (!isVerifide) {
      document.getElementById("recaptcha").classList.add("formError");
      setTimeout(() => {
        document.getElementById("recaptcha").classList.remove("formError");
      }, 3000);
    }
  };

  verifyCallback = (response) => {
    if (response) {
      this.setState({
        isVerifide: true,
      });
    }
  };

  recaptchaLoaded = () => {};

  formSubmit = (e) => {
    e.preventDefault();
    this.validForm(this.state);
    const templateId = "template_id";

    this.sendFeedback(templateId, {
      message_html: this.state.message,
      from_name: this.state.name,
      reply_to: this.state.email,
    });
  };

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("schwarzblade_gmail_com", "template_t384rmoE", variables)
      .then((res) => {
        this.setState({
          name: "",
          email: "",
          message: "",
          buttonText: "Wysłano",
        });
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) => console.log(err));
  }
}
