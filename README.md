# q-chat


## Frontend

### Description
The frontend part of this app based on React/Redux stack with ES6/ES7 features.
Used libs you can see in `package.json` file.

### Commands
Install dependencies
```
$ npm i
```
Run development server
```
$ npm start
```
Build app (create bundle.js file in "dist" directory)
```
$ npm build
```

## Backend

### Description
The backend part of application based on Node JS with Express and Socket.io with ES6/ES7. For testing i used `jest`

### Commands
Install dependencies
```
yarn
```

Begin development
```
yarn run dev
```

Run tests
```
yarn run test
```

Build the app
```
yarn run build
```

Begin linting in watch mode
```
yarn run lint
```

### Environmental variables in development
The project uses dotenv for setting environmental variables during development. Simply copy .env.example, rename it to .env and add your env vars as you see fit.

It is strongly recommended never to check in your .env file to version control. It should only include environment-specific values such as database passwords or API keys used in development. Your production env variables should be different and be set differently depending on your hosting solution. dotenv is only for development.

#### Required env variables
* NODE_ENV
* MONGODB_URI
