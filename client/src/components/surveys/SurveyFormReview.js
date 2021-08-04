// SurveyFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div className="field-review" key={name}>

        {/* <label><strong className="has-text-white is-size-5">{label}</strong></label> */}
        <label className="field-label has-text-weight-bold">{label}</label>

        <div className="field-value">
          {formValues[name]}
        </div>

      </div>
    );
  });
// 
  return (
    <div className="form-review">
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <div className="review-group">

        <div className="control has-icons-right">
          <button
            className="button has-text-white back"
            onClick={onCancel}
          >
            Back &nbsp; <i class="fas fa-arrow-left"></i>
          </button>
        </div>

        <div className="control has-icons-right">
          <button
            onClick={() => submitSurvey(formValues, history)}
            className="button has-text-white next"
          >
            Send &nbsp; <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
