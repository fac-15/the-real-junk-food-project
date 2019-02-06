# The Real Junk Food Project

![](http://www.pacnvac.co.uk/wp-content/uploads/2017/07/logo_280x280.png)

## Contents
- [Context](#Context)
- [The App](#The-App)
- [Current Implementation Ideas](#Current-Implementation-Ideas)
- [Tech Stack](#Tech-Stack)
- [Installation](#Installation)
- [Team](#Team)

## Context
TRJFP is a global movement aiming to abolish surplus food through a variety of Pay As You Feel concepts.

They work with international and local partners to intercept food destined for landfill and redistribute it through a network of Pay As You Feel Sharehouses, cafes and school partnerships.

## The App
The goal of this app is to verify drivers from TRJFP sent to pick up excess food from suppliers. There have been problems with drivers picking up food when they're not supposed to, or people impersonating TRJFP drivers in order to take and sell the food themselves.
Our main objectives are: 
- to make the supplier feel confident that they are giving food to the correct person
- to create a record of what drivers have been to which suppliers.

One request from the client is that we include a code that changes daily in order to help secure the verification.

## Current Implementation Ideas
![](https://i.imgur.com/uWmhbBL.jpg)
![](https://i.imgur.com/c2fjnYM.png)

To begin with, there will be a log in page. For the moment we are thinking of using Airtable.com to host our database, so that the client can log in and access it from there. For the moment, they will input the list of current drivers and suppliers, including their details and a pin, and they will use that information to log in with an email and pin number.

Drivers, once logged in, will simply see a screen with today's code (that will originally be hard coded into an Airtable, but will eventually be generated daily) and a reminder of their ID number (or other personally identifiable information). Ideally we would also like to include a list of anywhere that they have been confirmed to have picked up deliveries that day.

Suppliers, once logged in, will see two inputs - one for today's code and another for the driver's ID number. They will need to ask the driver for the information for both (they can just show their own page on the app) and then submit it. If all is well they will receive a success page, otherwise they will receive an error page potentially asking them to try again or providing the number to call The Real Junk Food Project. If the verification is successful, we will also record in the database the driver's name, the supplier, and the time, so that there are records for every pick up.

## Tech Stack

- Coming soon

## Team

| <a href="https://github.com/charlielafosse" target="_blank">**Charlie**</a> | <a href="https://github.com/Whooolia" target="_blank">**Jihyun**</a> |
| :---: |:---:|
| [![Charlie](https://avatars1.githubusercontent.com/u/32115309?s=460&v=4?v=3&s=200)](http://fvcproductions.com)    | [![Jihyun](https://avatars0.githubusercontent.com/u/36998110?s=460&v=4?v=3&s=200)](http://fvcproductions.com) |
| <a href="https://github.com/charlielafosse" target="_blank">`https://github.com/charlielafosse`</a> | <a href="https://github.com/Whooolia" target="_blank">`https://github.com/Whooolia`</a> |

| <a href="https://github.com/orgs/fac-15/people/wright1" target="_blank">**Charmaine**</a> | <a href="https://github.com/Oliversw" target="_blank">**Oliver**</a> |
| :---: |:---:|
| [![Charmaine](https://avatars2.githubusercontent.com/u/20236080?s=460&v=4?v=3&s=200)](http://fvcproductions.com)    | [![Oliver](https://avatars3.githubusercontent.com/u/9094166?s=460&v=4?v=3&s=200)](http://fvcproductions.com) |
| <a href="https://github.com/orgs/fac-15/people/wright1" target="_blank">`https://github.com/orgs/fac-15/people/wright1`</a> | <a href="https://github.com/Oliversw" target="_blank">`https://github.com/Oliversw`</a> |
