/**
 * Find Your Hat - Console Game
 */

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

/**
 * Field Class
 */

class Field {
    constructor(hatAndHoles, field) {
        this._field = field;
        this._hatAndHoles = hatAndHoles;
    }

    /**
     * playGame - method
     */

    playGame() {
        let y = 0;
        let x = 0;
        this.print(this._field);
    }

    /**
     * print - method 
     * 
     * used to print game field
     */

    print() {
        for (let row of this._field) {
            console.log(row.join(' '));
        }
    }

    /**
     * generateField - method 
     */

    static generateField(height, width, holes) {
        let newField = [];
        for (let i = 0; i < height; i++) {
            newField.push([]);
            for (let j = 0; j < height; j++) {
                newField[i].push(fieldCharacter);
            }
        }
        
        newField[0][0] = pathCharacter;
        
        let hatX = 0;
        let hatY = 0;

        do {
            hatX = Math.floor(Math.random() * width);
            hatY = Math.floor(Math.random() * height); 
        }
        while (hatX === 0 || hatY === 0); 

        newField[hatY][hatX] = hat;
        
        for (let k = holes; k > 0; k--) {
            let holeX = hatX;
            let holeY = hatY;

            do {
                holeX = Math.floor(Math.random() * width);
                holeY = Math.floor(Math.random() * height);
            }
            while (holeX === hatX || holeX === 0 || holeY === hatY || holeY === 0 || newField[holeY][holeX] === hole)

            newField[holeY][holeX] = hole;
        }
        return newField;
    }

    static generateBlankField(height, width) {
        let newField = [];
        for (let i = 0; i < height; i++) {
            newField.push([]);
            for (let j = 0; j < height; j++) {
                newField[i].push(fieldCharacter);
            }
        }
        
        newField[0][0] = pathCharacter;
        return newField;    
    }
}

let myField;

const newField = Field.generateField(5, 5, 3);

const newBlankField = Field.generateBlankField(5,5);

console.log(newField.join('\n'));

console.log(newBlankField.join('\n'));


