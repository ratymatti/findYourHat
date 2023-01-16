const prompt = require('prompt-sync')({sigint: true});

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
}