// contains actual html sent out in email
module.exports = (survey) => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>I'd like your input!</h3>

          <p>Please answer the following question:</p>
          
          <p>${survey.body}</p>

          <div>
            <a href="http://localhost:3000">Yes</a>
            <a href="http://localhost:3000">No</a>
          </div>

        </div>
      </body>
    </html>
  `;
};