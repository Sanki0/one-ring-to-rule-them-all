# Description
This is a React web application that fetches data from the API (https://the-one-api.dev/) and displays information of The Lord of the Rings

# How to use it?

### Clone the repository in a directory, then run: `npm install` 

This will install the necessary dependencies (node_modules).

### Create an account in https://the-one-api.dev/login

Some endpoints require authorization, because of that the Access token will be essential to fetch from the API

### Create a `.env` file in the src directory of the project

In this file add these two variables:
+ REACT_APP_API_URL = 'https://the-one-api.dev/v2'
+ REACT_APP_API_TOKEN = '{your_access_token}'

### To run in development mode, run: `npm start`

Open http://localhost:3000 to view it in your browser.\
The page will reload when you make changes.
