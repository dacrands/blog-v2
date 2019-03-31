import React from "react";
import { navigateTo } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {
      nameInput,
      nameLabel,
      emailInput,
      emailLabel,
      textArea,
      textareaLabel,
    } = this.refs

    textArea.addEventListener('focus', e => {      
      textareaLabel.style.opacity = 0;
    })

    textArea.addEventListener('blur', e => {
      if (e.target.value === "") {
        textareaLabel.style.opacity = 1;
      }
    })
    
    nameInput.addEventListener('focus', e => {      
      nameLabel.classList.add('label--move', 'form__item--active')
    })

    nameInput.addEventListener('blur', e => {
      if (e.target.value === "") {
        nameLabel.classList.remove('label--move', 'form__item--active')        
      }
    })

    emailInput.addEventListener('focus', e => {      
      emailLabel.classList.add('label--move', 'form__item--active')
    })

    emailInput.addEventListener('blur', e => {
      if (e.target.value === "") {
        emailLabel.classList.remove('label--move', 'form__item--active')        
      }
    })
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <section id="contact" className="contact">
          <div className="contact__content">
          <header className="contact__title">         
              <h1>Say hello!</h1>  
              <p>Need a website? 
                Like to talk about things web development?
                Intense fan of 90s music?
                Then let's get in touch!
                </p>                      
          </header>
          </div>          
          <div className="contact__form">
            <form
              className="form"
              name="contact"
              method="post"
              action="/success/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out:{" "}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </p>
              <p className="form__item">
                <input 
                  required                   
                  type="text" 
                  name="name" 
                  id="name"
                  ref="nameInput" 
                  onChange={this.handleChange} />
                <label htmlFor="name" ref="nameLabel">Your name</label>
              </p>
              <p className="form__item">
                <input 
                  required                 
                  type="email" 
                  name="email" 
                  id="email"
                  ref="emailInput" 
                  onChange={this.handleChange} 
                />
                <label htmlFor="email" ref="emailLabel">Your email</label>
              </p>
              <p className="form__item">
                <label htmlFor="message" ref="textareaLabel">Your message</label>
                <textarea 
                  required 
                  name="message"
                  id="message"
                  ref="textArea"                    
                  // placeholder="Send a message..." 
                  rows="5" cols="25"
                  onChange={this.handleChange} 
                />
              </p>
              <p>
                <button className="button" type="submit">Send</button>
              </p>
            </form>
          </div>        
      </section>
    );
  }
}