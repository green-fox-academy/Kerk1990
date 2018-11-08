'use strict';
// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// OPTIONAL
// The frist columns should be automatically as wide as the longest key

const ingredients: any[] = [
	{ name: 'vodka', inStock: 1, needsCooling: true },
	{ name: 'coffee_liqueur', inStock: 0, needsCooling: true },
	{ name: 'fresh_cream', inStock: 1, needsCooling: true },
	{ name: 'captain_morgan_rum', inStock: 2, needsCooling: true },
	{ name: 'mint_leaves', inStock: 0, needsCooling: false },
	{ name: 'sugar', inStock: 0, needsCooling: false },
	{ name: 'lime juice', inStock: 0, needsCooling: true },
	{ name: 'soda', inStock: 0, needsCooling: true }
];
function tablePrinter(list: any[]): void {

	function multiplyCharacter(character: string, number: number): string {

		let characterChain: string = character;

		for (let a: number = 1; a < number; a++) {
			characterChain = characterChain + character;
		}
		return characterChain;
	}
	let longestNameLength: number = 0;
	for (let i: number = 0; i < list.length; i++) {

		if (list[i].name.length > longestNameLength) {

longestNameLength = list[i].name.length;
		}
	}
	
}
