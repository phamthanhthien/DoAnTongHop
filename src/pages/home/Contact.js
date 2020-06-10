/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Banner from "../../components/Banner";

export default function Contact() {
  return (
    <div>
      <Banner />

      <section className="w3l-contact-main w3l-contact3">
        <div className="contact1-bg py-5">
          <div className="container py-lg-5">
            <div className="row contact-main">
              <div className="grid col-lg-6">
                <div className="column">
                  <h3 className="hny-title">How We Can Help</h3>
                  <p className="head-main">
                    For more info or inquiry about our products project, and
                    pricing please feel free to get in touch with us.
                  </p>
                </div>
                <div className="column2">
                  <div className="contact-para contact-info-align">
                    <div className="icon">
                      <span className="fa fa-map-marker" />
                    </div>
                    <div>
                      <strong className="info">Office Address :</strong>{" "}
                      <p>103 Nguyen Cu Trinh, Nguyen Cu Trinh Ward, District 1, Ho Chi Minh, Vietnam</p>
                    </div>
                  </div>
                  <div className="contact-info-align">
                    <div className="icon">
                      <span className="fa fa-phone" />
                    </div>
                    <div div className="icon-con-info">
                      <strong className="info">Phone :</strong>{" "}
                      <a href="tel:+404 11-22-89"> +84 73 47 97</a>
                    </div>
                  </div>
                  <div className="contact-info-align">
                    <div className="icon">
                      <span className="fa fa-envelope-open-o"> </span>
                    </div>
                    <div>
                      <strong className="info">Email Address :</strong>{" "}
                      <a href="mailto:phamthanhthien1910@mail.com"> phamthanhthien1910@mail.com</a>
                    </div>
                  </div>
                </div>
                <div className="column3">
                  <h4 className="header">Follow us </h4>
                  <a href="#facebook" className="facebook" title="facebook">
                    <span className="fa fa-facebook" />
                  </a>
                  <a href="#twitter" className="twitter" title="twitter">
                    <span className="fa fa-twitter" />
                  </a>
                  <a href="#linkedin" className="linkedin" title="linkedin">
                    <span className="fa fa-linkedin" />
                  </a>
                  <a href="#instagram" className="instagram" title="instagram">
                    <span className="fa fa-instagram" />
                  </a>
                </div>
              </div>
              <div className="map col-lg-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6229329007488!2d106.68737531538792!3d10.763515892330249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1738aa5e2f%3A0x772e8509214d82aa!2zMTAzIE5ndXnhu4VuIEPGsCBUcmluaCwgUGjGsOG7nW5nIE5ndXnhu4VuIEPGsCBUcmluaCwgUXXhuq1uIDEsIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2sin!4v1591719671894!5m2!1sen!2sin"
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form py-5">
          <div className="container py-lg-5">
            <div className="contacts12-main">
              <h3 className="hny-title text-center">Get In Touch</h3>
              <form
                className="f-hnyv mt-md-5 mt-4"
                action="https://sendmail.w3layouts.com/submitForm"
                method="post"
              >
                <div className="main-input">
                  <div>
                    <label className="field-info">
                      Name <span className="compulsary">*</span>
                    </label>
                    <input
                      type="text"
                      name="w3lName"
                      id="w3lName"
                      placeholder="Your Name"
                      className="contact-input"
                    />
                  </div>
                  <div>
                    <label className="field-info">
                      Email <span className="compulsary">*</span>
                    </label>
                    <input
                      type="email"
                      name="w3lSender"
                      id="w3lSender"
                      placeholder="Your Email id"
                      className="contact-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="field-info">
                      Subject <span className="compulsary">*</span>
                    </label>
                    <input
                      type="text"
                      name="w3lSubject"
                      id="w3lSubject"
                      placeholder="Subject"
                      className="contact-input"
                    />
                  </div>
                </div>
                <label className="field-info">
                  Message <span className="compulsary">*</span>
                </label>
                <textarea
                  className="contact-textarea"
                  name="w3lMessage"
                  id="w3lMessage"
                  placeholder="Type your message here"
                  required
                  defaultValue={""}
                />
                <div className="text-right">
                  <button className="btn btn-contact">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
