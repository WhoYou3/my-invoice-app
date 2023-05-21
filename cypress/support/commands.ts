/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/database";
// import "firebase/compat/firestore";
// import { attachCustomCommands } from "cypress-firebase";

// const fbConfig = {
//   apiKey: "AIzaSyCzLDJZ3yHXK8HCgB5uC3LGylu5cU6e3eg",
//   authDomain: "invoice-db1.firebaseapp.com",
//   projectId: "invoice-db1",
//   storageBucket: "invoice-db1.appspot.com",
//   messagingSenderId: "219594136439",
//   appId: "1:219594136439:web:e6724b0c9c7eec20be5f72",
//   measurementId: "G-09CHCV82VD",
// };

// firebase.initializeApp(fbConfig);

// attachCustomCommands({ Cypress, cy, firebase });
