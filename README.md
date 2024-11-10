# Angular Test for Relx

## Requirements

This project was built using the following:
- [Node.js] (https://nodejs.org/) Version 20
- [Angular CLI] (https://angular.dev/) Version 18 `npm install -g @angular/cli`

### To Install
```sh
git clone [https://github.com/markjercoates/relx-angular-test]
cd relx-angular-test\angulardemo
npm install
```
### To Run
- Run npm start
- Go to http://localhost:4200/ and the home page should be displayed with the company search box.
- If a CORS error happens on a search then do the following:
- Open a command prompt in the installation folder for the Chrome Browser:
- On Windows: "C:\Program Files\Google\Chrome\Application"
- Run the following command: 
- "chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security"

### Development 
Run the following command for a development server:
```sh
ng-serve
```
## Content
The project consists of the following pages:
- Auth\Login
- Home
- NoContent

The Home page contains the Company Search and Company Detail components.

### Packages
-  [Bootstrap 5](https://getbootstrap.com/) and [ng-bootstrap](https://ng-bootstrap.github.io/) components

## Preview
