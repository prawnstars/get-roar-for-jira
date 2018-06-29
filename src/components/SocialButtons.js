import React from 'react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';


fontawesome.library.add(faEnvelope, faTwitter);


const SocialButtons = () => (
  <div className="social-icons">
    <ul className="list-unstyled text-center mb-0">
      <li className="list-unstyled-item">
        <a href="#">
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </a>
      </li>
      <li className="list-unstyled-item">
        <a href="#">
          <FontAwesomeIcon icon={['fas', 'envelope']} />
        </a>
      </li>
    </ul>
  </div>
);


export default SocialButtons;
