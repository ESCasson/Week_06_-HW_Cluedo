//Episode 1
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);
// verdict The murderer is Miss scarlet

//Episode 2
// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
//verdict The murdered is Professor Plum
// okay so I was right is it wasn't going to be Mrs Peacock but wrong
// it didn't run at all because it is a constant.  You can't change a constant!!!
//Hence Constant!!!


// //Episode 3
//
//
// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);
// //first verdict Mrs Peacock
// //second verdict Professor Plum


// //Episode 4
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);
// // The suspects are Miss Scarlet, Professor Plum, Colonel Mustard
// // Suspect thress is Mrs Peacock


// //Episode 5
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);
// // the weapon is the Candle Stick.
// //a***s!!! okay so clearly the changeWeapon can see and change the array scenario
//
// //Episode 6
// let murderer = 'Colonel Mustard';
//
// /////BLOCK/////
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }
//
//   plotTwist();
// }
// ////BLOCK/////
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// // The murderer is Colonel Mustard
// // okay so similar to above the function did change what was outside it!!!


// //Episode 7
// let murderer = 'Professor Plum';
// ///BLOCK///
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
// ///BLOCK///
//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';
//
//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }
//
//     unexpectedOutcome();
//   }
//   ///BLOCK///
//
//   plotTwist();
// }
// ///BLOCK///
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// //Miss Scarlet
// // let varible is not avaiable outside the block so calling plotTwist does nothing






// //Episode 8
//
// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };
// ///////
// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
//
// //////////
//
//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }
//
//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }
// // Colonel Mustard != as Mrs Peacock so unexpected Outcome does nothing
//     unexpectedOutcome('Colonel Mustard');
//   }
// ////////
// // this changes the scenario to Colonem Mustard and Dining Room
//   plotTwist('Dining Room');
// }
// //////
//
// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }
// // this changes the overall sceanario to Col Mustart, Dinning Room, Lead Pipe
// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);
//
// //The weapon is the lead pipe


//Episode 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

//Plum YESSSSS!
