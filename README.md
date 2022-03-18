# Employee Meet Calculator

## Description

Calculate the number of encounters in a given week from hours worked, using the json database that has people and hourly based schedules
the day of the week and the day section

## Project

This project uses a basic infrastructure of folders,
where we have the files ordered by their functionality
and types, this project applies tdd

## Getting Started

You only need the following steps:

* Install dependencies with `yarn | npm install`
* Compile the project with `yarn build | npm run build`
* Run the software with `yarn start | npm run start` can accept the following arguments:
    * `path=[value]` to specify a path to a file with the input rows, by default uses `example.txt`
* Example command `yarn start dist/index.js --path=[value]`

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
 