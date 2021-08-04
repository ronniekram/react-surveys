import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(actions.fetchUser());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="house">
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={() => <Landing user={user} />} />
        <Route exact path="/surveys" component={Dashboard} />
        <Route path="/surveys/new" component={SurveyNew} />
        <Footer />
      </div>
    </BrowserRouter>
  </div>
  );
};

export default App;
