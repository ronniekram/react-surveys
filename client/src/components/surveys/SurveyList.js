import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSurveys } from '../../actions';
import Survey from './Survey';

const SurveyList = () => {
  const dispatch = useDispatch();
  const surveys = useSelector(state => state.surveys);

  useEffect(() => {
    dispatch(fetchSurveys());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderSurveys = () => {
    return surveys && surveys.reverse().map(survey => {
      return <Survey survey={survey} />
    });
  };

  return (
    <div className="survey-list">
      {renderSurveys()}
    </div>
  );
};

export default SurveyList;