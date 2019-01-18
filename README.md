# Jest Testing #
## Introduction

Why Jest is better than Mocha?
* Mocha is less opinionated, while Jest has a certain set of conventions
* Mocha requires more configuration, while Jest works usually out of the box, thanks to being opinionated
* Mocha is older and more established, with more tooling integrations

## Installation
Install yarn
```https://yarnpkg.com/lang/en/docs/install/#debian-stable```
Install jest
```yarn add --dev jest```

Official documentation
```https://jestjs.io/docs/en/getting-started```

## Run tests
```npm run test```

## Run jest addon in VSC
```Jest: Start Runner```

```https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest```

## Info
What is package-lock.json?
```https://blog.risingstack.com/yarn-vs-npm-node-js-package-managers/```

* package-lock.json is automatically generated and updated for any operations where the npm cli modifies the node_modules directory, or the package.json file. In addition to that, every npm install automatically adds installed modules to both package.json and package-lock.json This file is meant to be committed into the version control you are using. With this feature, npm got feature parity with yarn, when it comes to lock file support.

Yarn vs npm
```https://x-team.com/blog/yarn-vs-npm/```