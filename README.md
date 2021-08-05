# react!survey

Project name is a web application that allows business owners to send bulk surveys requesting feedback.

A user can create an account/login with Google, purchase 'credits' & send out batch surveys to recieve feedback on their product or service.

*This project is built with a test account on Stripe.*
- In order to "purchase" credits, you can use this test card number: `4242 4242 4242 4242`. 
- The expiration date does not matter, so long as it is some date in the future.

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed the latest version of Node.js & Node Package Manager.
* You will need API keys from: Google (for OAuth, client & secret), Mongo, Stripe (publishable & private) & SendGrid. 

## Using react!survey

To use react!survey, follow these steps:

* Clone this repository to your local machine.
* In order to add your personal API keys to this project, create a file called `devel.js` inside of `server/cofig`. 
* The `devel.js` file should be set up in the following format: 
  ```
    module.exports = {
    googleClientID: '<your google client id>',
    googleClientSecret: '<your google client secret>',
    mongoURI: '<URI to your mongo server>',
    cookieKey: '<randomly generated string of characters & numbers>',
    stripePublishableKey: '<your own Stripe publishable key>',
    stripeSecretKey: '<your own Stripe secret key>',
    sendGridKey: '<your own SendGrid key>',
    redirectDomain: 'http://localhost:3000'
  };
  ```
* Inside of the `server` & `client` directories, run `npm install` or `yarn install` depending on your preference. 
* From the `server` directory, run `npm run dev`. This will start both the server & client.

* You can also see the deployed version [here](https://damp-shore-53339.herokuapp.com/)

## Contributing to react!survey

To contribute to react!survey, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Contact

If you want to contact me you can reach me at arynn.boniface@gmail.com.

## License

This project uses the following license: [MIT](https://opensource.org/licenses/MIT).
