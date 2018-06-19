import React from 'react';


const NotFoundPage = () => (
  <div className="wrapper">
    <div className="overlay"></div>
    <div className="masthead">
      <div className="masthead-bg"></div>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-12 my-auto">
            <div className="masthead-content text-white py-5 py-md-0">
              <div className="logo">
                <img src="img/logo-roar.svg" className="logo-image" />
                <span className="logo-text">Roar</span>
              </div>
              <h2>Page Not Found</h2>
              <p className="mb-5">
                Sorry, but that page doesn&apos;t exist.
              </p>
              <p className="mb-5">
                You should check out our <a href="/">voice assistant</a>, though.
                It&apos;s pretty cool.
              </p>
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


export default NotFoundPage;
