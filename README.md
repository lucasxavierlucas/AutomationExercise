# Automation Exercise - Playwright UI & API Automation

## Introduction
This repository contains test scripts for UI and API automation using the Playwright framework. The tests focus on essential principles like external data input, Page Object Model, HTML reporting, and cross-browser support.

## Setup
1. Clone this repository.
2. Install Node.js and npm.
3. Run `npm install` in the project directory.

## Test Scripts

### UI Test 1 - Register User
- Verify successful user registration.

### UI Test 2 - Login User
#### Invalid Scenario
- Check unsuccessful login with an invalid password.

#### Valid Scenario
- Validate successful login with a valid password.

### UI Test 3 - Add to Cart (Data-Driven)
- Add 'Blue' products from an external file to the cart.
- Verify 'Blue' text in added products.
- Ensure no 'Yellow' text in added products.
