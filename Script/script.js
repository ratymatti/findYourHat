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
    constructor(hatAndHoles, displayField) {
        this._displayField = displayField;
        this._hatAndHoles = hatAndHoles;
    }

    /**
     * playGame - method that displays game area and handles players movement 
     */

    playGame() {
        let y = 0;
        let x = 0;
        this.print(this._displayField);

        while (this._hatAndHoles[y][x] === pathCharacter || this._hatAndHoles[y][x] === fieldCharacter) {
            const direction = prompt('Which direction you like to move? N S E W');

            if (direction === direction.toUpperCase()) {
                if (direction === 'N' || direction === 'S' || direction === 'W' || direction === 'E') {
                    if (direction === 'N') {
                        if (y === 0) {
                            console.log('Out of bounds.');
                        } else {
                            y -= 1;
                        }
                    } else if (direction === 'S') {
                        if (y === this._displayField.length) {
                            console.log('Out of bounds.');
                        } else {
                            y += 1;
                        }
                    } else if (direction === 'E') {
                        if (x === this._displayField[y].length) {
                            console.log('Out of bounds.');    
                        } else {
                            x += 1;
                        }  
                    } else if (direction === 'W') {
                        if (x === 0) {
                            console.log('Out of bounds');
                        } else {
                            x -= 1;
                        }
                    }
                    
                    if (this._hatAndHoles[y][x] === hat) {
                        this._displayField[y][x] = hat;
                        this.print(this._displayField);
                        console.log('You found the hat!');
                    } else if (this._hatAndHoles[y][x] === hole) {
                        this._displayField[y][x] = hole;
                        this.print(this._displayField);
                        console.log('You fell in a hole, game over!');
                    } else {
                        this._displayField[y][x] = pathCharacter;
                        this.print(this._displayField);      
                    }  
                }

            } else {
                console.log(`Invalid input. Input must be 'N', 'W', 'S' or 'E'.`);
            }
        }       
    };
    

    /**
     * print - method 
     * 
     * used to print game field
     */

    print() {
        for (let row of this._displayField) {
            console.log(row.join(' '));
        }
    };

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
    };

    /**
     * generateBlankField - static method
     * 
     * @param {*} height 
     * @param {*} width 
     * @returns blank game area that is visible to player
     */

    static generateBlankField(height, width) {
        let newField = [];

        for (let i = 0; i < height; i++) {
            newField.push([]);
            for (let j = 0; j < width; j++) {
                newField[i].push(fieldCharacter);
            }
            
            newField[i].push(i);
        }
        newField[0][0] = pathCharacter;
        return newField;    
    };
};

let myField;

const blankField = Field.generateBlankField(5,5);

const newField = Field.generateField(5, 5, 1);



myField = new Field (newField, blankField);

myField.playGame();





