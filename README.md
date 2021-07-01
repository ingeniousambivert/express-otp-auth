# Express-Starter

> Minimal Express Server with OTP Authentication for phone numbers.

## About

This project uses [Express](https://expressjs.com/). Fast, unopinionated, minimalist web framework for Node.js. It provides a REST API with [Twilio's Verify API](https://www.twilio.com/docs/verify), via phone number.


## Getting Started

Getting up and running is simple.

1. Make sure you have [NodeJS](https://nodejs.org/), [npm](https://www.npmjs.com/) installed in your system globally.
2. Install your dependencies.

```bash
cd path/to/server
npm install
```

3.1 Start your server.

```bash
npm start
```

3.2 Start your server in development mode.

```bash
npm run dev
```

4. Configuring the server with environment variables

   - Create a `.env` file in the root
   - Add the following lines to it (modify according to your environment/requirements)

   ```env
   # Express Server config
    PORT=8000

   # Twilio API config
    TWILIO_ACCOUNT_SID=Axxxxxxxxxxxxxxxxxxxxxxxxxxxxxxd
    TWILIO_AUTH_TOKEN=exxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxf
    SERVICE_ID=Vxxxxxxxxxxxxxxxxxxxxxxxxxxxx5
   ```



## Routes

All routes start with a prefix of - `/api/`


**POST** `/otp/generate`

_request_ :

```js
{   //with county code
    "toPhoneNumber":"1234567890"
    
}
```

_reponse_ :

```js
{ message: "OTP Sent successfully" }

```

**POST** `/otp/authenticate`

_request_ :

```js
{   //with county code
    "toPhoneNumber":"1234567890"
    "verificationCode":"076213"
}
```

_reponse_ :

```js
{ message: "OTP verified successfully" }

```