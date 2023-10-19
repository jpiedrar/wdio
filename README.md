# Demoblaze Test Automation Framework

## Introduction

This is a WebDriver.io project. The idea of this project is to test an ecomerce web application that has several screens

## Specifications

* These are the areas that the client requested coverage for:
  * Account creation
  * Login
  * Browsing the store’s main categories (Phones, Laptops, Monitors)
  * Play About Us video
  * Send a message through Contact
  * Shopping cart
  * Checkout

## Prerequisites

 * npm v7.6.0 installed
 * Node v15.11.0 installed

## How to run?

First of all you will need to clone the repository and then start running this commands

* `npm install`: this will install all the packages needed to run the application
* `npm test`: this will run all the test 
* `npm run regression`: this will run the regression suite
* `npm run smoke`: this will run the smoke suite
* `npm run sanity`: this will run the sanity suite

## Future steps (if I had have more time)

* Add validation to text displayed when user completes the purchase
* Add validation to count amount of items selected and displayed in cart
* Docker integration to be run in a CI/CD environment 
