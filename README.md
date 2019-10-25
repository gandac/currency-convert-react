# C U R R E N C Y C O N V E R T E R -- D E M O P R O J E C T 

I have build this project for a challenge for love home swap.

In the UI the user can pick his currency and see how much he can get for a foreign currency.

The UI is flexible so it will work on both directions.

We read rates from an external api, and the country/currency info from external API

We first construct all the rates from the US based rates.

You can see the demo here [http://react-calculator-8bfea.web.app](http://react-calculator-8bfea.web.app) 

This javascript project uses React framework for providing the view skeleton,Redux for storing data, Webpack for building / creating hot dev server

Source files are in the `src/` folder and built files are in `public/` folder

Code for the main container is in the `pages/`, and for the main actions `state/convertor` , `state/info` , `state/rates`

All the contant requirements are in `state/constants`


## Available Scripts

The project is an ejected insance of create-react-app. Has 

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Run all the tests

### `yarn build`

Builds production artifacts
