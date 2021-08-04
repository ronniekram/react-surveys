import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
  return (
    <div className="dashboard">

      <div className="add-survey">
        <Link to="/surveys/new" className="button-link">
          <i className="fas fa-plus add-button"></i>
        </Link>
      </div>

      <div>
        <SurveyList />
      </div>
    </div>
  );
};

export default Dashboard;
