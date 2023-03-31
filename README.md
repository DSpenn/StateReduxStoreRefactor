# 22 State Homework: Redux Store


## Table of Contents
  - [Description](#Description)
  - [Technologies-Used](#Technologies-Used)
  - [User-Story](#User-Story)
  - [Mock-Up](#Image)
  - [Grading-Requirements](#Grading-Requirements)
  - [Questions](#questions)


## Description

Assignment to refactor provided e-commerce platform from Activity 26 so that it uses [Redux](https://redux.js.org/).

## Technologies Used
```md
apollo-server-express, apollo/client
graphql
mongoose
bcrypt, jsonwebtoken, jwt-decode
stripe
react, react-apollo, react-dom, react-redux, react-router-dom, react-scripts
```

## User Story

```md
AS a senior engineer working on an e-commerce platform
I WANT my platform to use Redux to manage global state instead of the Context API
SO THAT my website's state management is taken out of the React ecosystem
```

## Mock-Up

This section reviews the web application's general appearance and functionality.

The following animation shows how a user can register using the Signup page and then navigate to the Products page:

![A user registers on the Signup page and then navigates to the Products page, which displays images and descriptions of products.](./Assets/22-state-homework-demo-01.gif)

The following animation shows how the user can select a category, choose a product, view details about it on the product page, and add and remove it from their shopping cart:

![The user selects a category, chooses a product, views details about it on the product page, and adds it to and removes it from their shopping cart.](./Assets/22-state-homework-demo-02.gif)

Finally, the user can check out by going to their shopping cart, as shown in the following animation:

![The user checks out by going to their shopping cart.](./Assets/22-state-homework-demo-03.gif)


## Grading Requirements
```md
This homework is graded based on the following criteria:

### Technical Acceptance Criteria: 40%

  [X] Retains all the functionality of the original application.
  [X] Application must be deployed to Heroku.

### Deployment: 32%

[X] Application deployed at live URL.
[X] Application loads with no errors.
[X] Application GitHub URL submitted.
[X] GitHub repository contains application code.

### Application Quality: 15%

[X] User experience is intuitive and easy to navigate.
[X] User interface style is clean and polished.
[X] Application resembles the mock-up functionality provided in the Challenge instructions.

### Repository Quality: 13%

[X] Repository has a unique name.
[X] Repository follows best practices for file structure and naming conventions.
[X] Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
[X] Repository contains multiple descriptive commit messages.
[X] Repository contains high-quality README file with description, screenshot, and link to the deployed application.
```

