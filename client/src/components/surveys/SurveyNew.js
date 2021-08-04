// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
      <div className="">
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);

// import React, { useState } from 'react';
// import { reduxForm } from 'redux-form';
// import SurveyForm from './SurveyForm';
// import SurveyFormReview from './SurveyFormReview';

// const SurveyNew = () => {
//   const [showFormReview, setShowFormReview] = useState(false);

//   const renderContent = () => {
//     if (showFormReview) {
//       return (
//         <SurveyFormReview 
//           onCancel={() => setShowFormReview(false)}
//         />
//       );
//     };

//     return (
//       <SurveyForm 
//         onSurveySubmit={() => setShowFormReview(true)}
//       />
//     );
//   };

//   return (
//     <div>
//       {renderContent()}
//     </div>
//   )

// };

// export default SurveyNew;