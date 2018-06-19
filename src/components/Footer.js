import Link from 'gatsby-link';
import React from 'react';
import { css } from 'emotion';


const footer = css`
  font-size: .7rem !important;
  margin-top: -3.5rem;
  display: flex;
  justify-content: space-between;
`;

const Footer = () => (
  <div className="col-12" >
    <div className="masthead-content text-white">
      <div className={footer}>
        <div>Copyright © 2018, Roar. All rights reserved.</div>
        <div>
          <Link to="/terms-and-policies/">Terms & Policies</Link>
        </div>
      </div>
    </div>
  </div>
);


export default Footer;
