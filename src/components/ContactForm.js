import React, { Component } from "react";
import { FaRoad, FaPhone, FaEnvelope } from "react-icons/fa";
export default class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    sent: false,
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
            <p>
              PKO Bank Polski SA <br /> 21 1020 3453 0000 8302 0303 2273
            </p>
          </div>
          <div className="contact">
            <h3>Napisz do nas!</h3>
            <form onSubmit={(e) => this.formSubmit(e)}>
              <p>
                <label>Imię</label>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => this.setState({ name: e.target.value })}
                  value={this.state.name}
                />
              </p>
              <p>
                <label>Twój Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                  value={this.state.email}
                />
              </p>
              <p className="full">
                <label>Wiadomość</label>
                <textarea
                  name="message"
                  rows="5"
                  onChange={(e) => this.setState({ message: e.target.value })}
                  value={this.state.message}
                ></textarea>
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

  formSubmit = (e) => {
    e.preventDefault();

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
