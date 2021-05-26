# GIHealthCheck
This repo contains examples of how to create page objects and tests using [webdriverio 7.0](https://github.com/webdriverio/webdriverio) and [ES6](http://es6-features.org/#Constants). The application under test is tourdedave's "[the-internet](https://github.com/tourdedave/the-internet)" project which contains examples of hard to automate pages. The test runner is the [wdio-mocha-framework](https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-mocha-framework). 

This project was created to serve as a reference to others interested in ES6 webdriver.io tests.

# Note
* node version 12 required for yargs

# Automated testing framework & libraries
* Mocha - automated testing e2e framework
* WebDriverIO to manipulate browser
* Chai as assertion


# Test execution
1) Clone the latest version of this repo.
2) ```npm install```
3) ```npm run build```
4) ```npm run test```.
5)```npm run test-headless```

# Run standalone spec
To execute a standalone spec run  ``` .\node_modules\.bin\wdio --spec <path to test> .\wdio.conf.js```

Example:
```.\node_modules\.bin\wdio --spec .\src\test\hoversTest.spec.js .\wdio.conf.js```