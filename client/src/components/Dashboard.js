import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <div className="fixed-action-btn">
        <NavLink 
          to="/surveys/new"
          className="btn-floating btn-large red">
          <i className="large material-icons">add</i>
        </ NavLink>
      </div>
    </div>
  )
}

export default Dashboard;