# NgLibrarySchematics

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

This project contains an application (`projects/sandbox`) that uses a created library (`projects/ricardosanz97/ng-lib`).

Project based on [Alain Boudard Medium article](https://coco-boudard.medium.com/add-schematics-to-angular-library-bd5987328d7b) and [Angular Schematics documentation](https://angular.io/guide/schematics).

## To take into account

In order to use the styles of the library in our application we need to import it in our `styles.scss`:

`@import "../../../projects/ricardosanz97/ng-lib/assets/styles.css";`

When the library is installed in another project as an external dependency the `@import` will come from `node_modules/@ricardosanz97/ng-lib/assets/styles.css`

In order to reference the library assets folder we need to add it in the Angular builder. For this, in the assets array of the `angular.json` we need to add:

    {
        "glob": "**/*",
        "input": "projects/ricardosanz97/ng-lib/assets",
        "output": "assets"
    }

When the library is installed in another project as an external dependency the `input` will come from `node_modules/@ricardosanz97/ng-lib/assets`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
