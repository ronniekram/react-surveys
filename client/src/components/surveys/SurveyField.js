// SurveyField contains logic to render a single
// label and text input
import React from 'react';

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  const renderType = () => {
    if (label === 'Campaign Title' || label === 'Subject Line') {
      return <input {...input}  className="input" />
    } else {
      return <textarea {...input} className="textarea" rows="3" /> 
    }
  }

  return (
    <div className="field form-field">
        <div className="control">
        <label className="label">{label}</label>
          {renderType()}
        </div>
      <div className="red-text" >
        {touched && error}
      </div>
    </div>
  );
};

export default SurveyField;