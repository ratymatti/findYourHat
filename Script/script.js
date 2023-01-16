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
}