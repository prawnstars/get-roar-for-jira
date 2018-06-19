import React from 'react';
import SocialButtons from '../components/SocialButtons';
import MailChimpSignupForm from '../components/MailChimpSignupForm';
import Footer from '../components/Footer';


const IndexPage = () => (
  <div className="wrapper">
    <div className="overlay"></div>
    <div className="masthead">
      <div className="masthead-bg"></div>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-12 my-auto">
            <div className="masthead-content text-white py-5 py-md-0">
              <div className="logo">
                <img src="/img/logo-roar.svg" className="logo-image" />
                <span className="logo-text">Roar</span>
              </div>
              <p className="mb-5">
                <strong>Roar for Jira</strong> is a voice assistant that makes working with JIRA
                more direct and intuitive, bringing back the natural flow to meetings.
                It saves the team time and effort without a click of the mouse.
              </p>
              <p>
                Subscribe to get updates on our progress.
              </p>
              <MailChimpSignupForm />
            </div>
          </div>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    </div>
    <SocialButtons />
  </div>
);


export default IndexPage;
