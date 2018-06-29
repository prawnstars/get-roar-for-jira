import React from 'react';


const MailChimpSignupForm = () => (
  <form action="https://roar.us17.list-manage.com/subscribe/post?u=121ef695e491fca3d3456fae4&amp;id=3085a35b0e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
    {/*Begin MailChimp Signup Form*/}
    {/*real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
      <input type="text" name="b_121ef695e491fca3d3456fae4_3085a35b0e" tabIndex="-1" value="" />
    </div>
    <div className="input-group input-group-lg input-group-newsletter">
      <input type="email" name="EMAIL" className="form-control" placeholder="Enter your email..." aria-label="Enter your email..." required />
      <div className="input-group-append">
        <input id="mc-embedded-subscribe" type="submit" value="Subscribe" name="subscribe" className="btn btn-primary" />
      </div>
    </div>
    {/*End mc_embed_signup*/}
  </form>
);


export default MailChimpSignupForm;
