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
}