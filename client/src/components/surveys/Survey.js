import React from 'react';

const Survey = ({survey}) => {
  return (
    <div className="survey">
      <div className="survey-title">
        {survey.title}
      </div>

      <div className="survey-date">
        <p>Sent On: {new Date(survey.dateSent).toLocaleDateString()}</p>
      </div>

      <div className="survey-body">
        {survey.body}
      </div>

      <div className="survey-responses">
        <p>Yes: {survey.yes}</p>
        <p>No: {survey.no}</p>
      </div>
    </div>
  );
};

export default Survey;