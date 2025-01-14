# Contributing Guide - Payhere JS SDK

## How to contribute

- First pick an issue that you want to work on. If the issue that you want to fix is not listed already, please don't hesitate to create one.

- Fork the repository and clone it into your computer.

- Create a new branch off the `development` branch, using the following naming convention for the branch name.   
`{issue_no}_{short phrase which briefly explains the purpose of the branch}`  
Eg: #8_retry_subscription_function

- Install dependencies using `npm install` or `yarn`.

- Run `npm run build` to compile the TypeScript code.

- Run `npm link` to create a symlink in the global npm folder

- Then run `npm link payhere-js-sdk`, to install the package locally in any single page app,