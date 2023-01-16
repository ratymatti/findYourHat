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

        return newField;
    }
}

let myField;

const newField = Field.generateField(5, 5, 1);

//console.log(newField);


