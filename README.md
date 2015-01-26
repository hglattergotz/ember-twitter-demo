Demo application written in Ember.js as part of the talk ["Why you should take a look at Ember (again)"](https://speakerdeck.com/hglattergotz/why-you-should-take-a-look-at-emberjs-again)

This application demonstrates how to write an Ember.js app that talks to a backend via REST and Websockets.

It uses 

* [ember-cli](http://www.ember-cli.com/#getting-started)
* [Ember Data](https://github.com/emberjs/data)
* [ember-cli-bootswatch](https://www.npmjs.com/package/ember-cli-bootswatch)
* [ember-cli-content-security-policy](https://www.npmjs.com/package/ember-cli-content-security-policy)
* [ember-websockets](https://www.npmjs.com/package/ember-websockets)
* [momentjs](http://momentjs.com/)
* [node-twitter-example](https://github.com/hglattergotz/node-twitter-example)

## Installation

* ```$ npm install -g ember-cli```
* ```$ npm install -g bower```
* ```$ git clone git@github.com:hglattergotz/ember-twitter-demo.git```
* ```$ ember install```
* ```$ ember serve --proxy http://127.0.0.1:8001```

Please note the proxy flag in the last command, this expects your node backed to be
listening on port 8001. See [hglattergotz/node-twitter-example](https://github.com/hglattergotz/node-twitter-example) for details.
