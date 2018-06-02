# NgChallange

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# My challenge steps:

## 1: create HTML/CSS template

Create header, container, footer with different elements including their styles CSS. 

## 2: install angular environment

Install node_js, npm, angular, ...

```$xslt
npm install -g @angular/cli
```

## 3: create angular project

```$xslt
ng new ng-challange --routing
```

## 4: generate different components

```$xslt
ng generate component home
ng generate component default-badge
ng generate component favorite
```

## 5: fill different components

Fill each component with html and css code

## 6: set different routes

Set each route by filling its path and component 

```$xslt
{ path: 'favorite', component: FavoriteComponent }
```

## 7: create movie functions

* AddMovie(): function handle user input movie and add it on his list,
* RemoveMovie(): function that remove movie from list,

## 8: add check input errors

Add check empty input or existing movie on list
 
## 9: create data service

Create data service to share data between between home and favorite components

```$xslt
ng generate service data
```

## 10: create favorite movie functions

Create different add & remove function on home & favorite components

## 11: create filter pipe

Create pipe filter for search input on favorite component

## 12: set animation for badge component

Set animation on active & inactive badge

## 13: input data to badge component

Handle inputs data from home (parent) to default-badge (child) components

# Install instructions

Execute the following commands to have a local version

```$xslt
git clone https://github.com/DrSiroukane/ng-challenge.git
cd ng-challenge
npm install
ng serve
```

[Click here](http://localhost:4200) after executing the commands above.

## Author

@ Slimane Siroukane

















































