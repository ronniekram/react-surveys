import React from 'react';
import { Link } from 'react-router-dom';

const Landing = ({user}) => {
  const renderLinks = () => {
    if (user) {
      return (
        <p className="links"><Link to="/surveys/new" className="land-link">Create New</Link> or <Link to="/surveys" className="land-link"> See Existing</Link></p>
      );
    } else {
      return null;
    }
  };
  
  return (
    <div className="landing">
      <h1 className="landing-title">
        react!surveys
      </h1>

      <p className="landing-tag">Customer surveys with a bang!</p>

      <div class="bang">
        <i class="fas fa-bomb"></i>
      </div>

      {renderLinks()}

      <p className="note">Note: Stripe payment is set up on a test account. <br /> 
      The test card number is: '4242 4242 4242 4242' and the expiration date can be set to any date in the future. <br /> 
      Recipient list is limited to five emails.</p>

    </div>
  );
};

export default Landing;
