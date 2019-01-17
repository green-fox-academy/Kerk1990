// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let black: string = '%';

let white: string = ' ';

let countLine: number = 8;

for (let i: number = 0; i < countLine; i++) {

    let string: string = '';

    if (i % 2 === 0) {

        for (let j: number = 0; j < countLine; j++) {

            if (j % 2 === 0) {

                string = string + black;

            } else {
                string = string + white;
            }
        }
    } else {

        for (let l: number = 0; l < countLine; l++) {

            if (l % 2 === 0) {

                string = string + white;
                
            } else {
                string = string + black;
            }
        }
    }
    console.log(string);
}
