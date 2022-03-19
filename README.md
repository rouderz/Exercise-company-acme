# Employee Meet Calculator

## Description

Calculate the number of encounters in a given week from hours worked, using the json database that has people and hourly based schedules
the day of the week and the day section

## Solution

For the solution of this exercise, it was necessary to first hand read and go to paper that had to be done, after being clear, that it was how many times the employees met in the week, the next step was taken, which was to develop the exercise, using typescript as the base language, as a first hand the strings were validated with regex to validate that it is in accordance with what was proposed and then to make the respective cuts to the string and pass them to an array and order them each 1 by their names and times, then for of and nested for were used to carry out the tours and compare the days and times of each one to later know how many times they meet.

## Project

This project uses a basic infrastructure of folders,
where we have the files ordered by their functionality and types,
for this project TDD was applied.


##Structure

> This is structure to folder in the project.

    ├── src
    │   ├── calculatingEncounters # This folder is responsible for calculating meetings between employees
    │   ├── groupEmployees # This folder is responsible for organizing employees into groups
    │   ├── global # In this folder are the types to be used globally
    │   └── utils  #The regex and the function to extract the parameters by console are stored in this folder.          
    └── test # Unit tests

## Getting Started

You only need the following steps:

* Install dependencies with `yarn | npm install`
* Compile the project with `yarn build | npm run build`
* Run the software with `yarn start | npm run start` can accept the following arguments:
    * `path=[value]` to specify a path to a file with the input rows, by default uses `example.txt`
* Run the software with `yarn build:start | npm run build:start` can accept the following arguments:
  * `path=[value]` to specify a path to a file with the input rows, by default uses `example.txt`
* Example command `yarn start --path=[value] | npm start --path=[value]`
* Example command `yarn build:start --path=[value] | npm build:start --path=[value]`

### Formats

Time format: militar hour format, ex `07:00-24:00`

Days

* MO: Monday
* TU: Tuesday
* WE: Wednesday
* TH: Thursday
* FR: Friday
* SA: Saturday
* SU: Sunday

Example inputs

* `RICARDO=MO12:00-04:00,TH12:00-14:00,SU20:00-21:00,SA14:00-18:00`
* `PEDRO=MO10:00-12:00,TH12:00-14:00,FR20:00-21:00`

*Enter an incorrect format will throw an error in the console*
 
