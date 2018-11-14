'use strict';

const watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

const queue: any[] = [
    { name: 'Amanda', alcohol: 10, guns: 1 },
    { name: 'Mark', alcohol: 0, guns: 0 },
    { name: 'Dolores', alcohol: 0, guns: 1 },
    { name: 'Wade', alcohol: 1, guns: 1 },
    { name: 'Anna', alcohol: -10, guns: 0 },
    { name: 'Rob', alcohol: 2, guns: 0 },
    { name: 'Joerg', alcohol: 20, guns: 0 }
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns

// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival
function securityCheck(list: any[]): any[] {

    let allowedEnter: string[] = [];

    for (let i: number = 0; i < list.length; i++) {
        const partyGoer = list[i];
        if (partyGoer.guns > 0) {

            watchlist.push(partyGoer.name);

        } else if (partyGoer.alcohol !== 0) {

            securityAlcoholLoot += partyGoer.alcohol;

            partyGoer.alcohol = 0;

            allowedEnter.push(partyGoer.name);

        } else {
            allowedEnter.push(partyGoer.name);
        }
    }
    return allowedEnter;
}

console.log('They are allowed to enter: ', securityCheck(queue));
console.log('They can\'t enter, they are on the watch list: ', watchlist);
console.log('Securities alcohol loot: ', securityAlcoholLoot, 'units of alcohol.');

// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival

export = securityCheck;