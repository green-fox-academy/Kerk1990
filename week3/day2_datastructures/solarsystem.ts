'use strict';
// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods

let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];
// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn",  "Uranus", "Neptune"
let missingPlanet: string = ", Saturn, ";
let position = 6;
let output = [planetList.slice(0, position), missingPlanet, planetList.slice(position)].join('');
console.log(output);

export = missingPlanet;


