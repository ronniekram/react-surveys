// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div className="survey-form">
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}

          <div className="button-group">

          <div className="control has-icons-right">
            <button type="submit" className="button has-text-white cancel">
              <Link to="/surveys" className="button-link">
                Cancel <i className="fas fa-times-circle"></i>
              </Link>
            </button>
          </div>

          <div className="control has-icons-right">
            <button type="submit" className="button has-text-white next">
              Next &nbsp; <i className="fas fa-check"></i>
            </button>
          </div>

          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
