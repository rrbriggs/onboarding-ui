# onboarding-ui

## how to run:
Install Node.js version `v10.16.2`
To check your node version, in terminal enter `node -v`

### clone the project
In terminal, at the directory you wish to clone the project to type `git clone --single-branch --branch visualization https://github.com/rrbriggs/onboarding-ui.git`

### start the server
In terminal, navigate to the /src/js directory (e.g.: `cd src/js/`)

Once more, in terminal, enter `node main.js`

You should now see `Server running at http://127.0.0.1:9000/`

### viewing in browser
Copy that address (`http://127.0.0.1:9000/`) and enter it into your browser.

### using webpack
Install [NPM](https://www.npmjs.com/), check your installation by running in terminal `npm -v`
In the root of the project initialize npm by running `npm init -y`
Download required dependencies by running `npm install`

Build the webpack project by running this command in the root directory of the project in terminal 
`npm run build`

Now you may run webpack using `npm run dev`

In your browser go to (http://127.0.0.1:9000/)

### note
This is currently hardcoded to GET from `http://localhost:8080/api/1.0/twitter/timeline`
You could/should use the twitter java application and run it to provide this endpoint.