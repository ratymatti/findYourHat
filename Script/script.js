/**
 * Find Your Hat - Console Game
 */

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

/**
 * Class Field
 */

class Field {
    constructor(hatAndHoles, displayField) {
        this._displayField = displayField;
        this._hatAndHoles = hatAndHoles;
    }

    /**
     * Method playGame()
     * 
     * Handles game events
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
                            console.log(`Out of bounds, you can't move further North.`);
                        } else {
                            y -= 1;
                        }
                    } else if (direction === 'S') {
                        if (y === this._displayField.length -1) {
                            console.log(`Out of bounds, you can't move further South.`);
                        } else {
                            y += 1;
                        }
                    } else if (direction === 'E') {
                        if (x === this._displayField[y].length -2) {
                            console.log(`Out of bounds, you can't move further East.`);    
                        } else {
                            x += 1;
                        }  
                    } else if (direction === 'W') {
                        if (x === 0) {
                            console.log(`Out of bounds, you can't move further West.`);
                        } else {
                            x -= 1;
                        }
                    }
                    
                    if (this._hatAndHoles[y][x] === hat) {
                        this._displayField[y][x] = hat;
                        this.print(this._displayField);
                        console.log('You found the hat!');
                        console.log('Type newGame() if you want to play new game.');
                        break;
                    } else if (this._hatAndHoles[y][x] === hole) {
                        this._displayField[y][x] = hole;
                        this.print(this._displayField);
                        console.log('You fell in a hole, game over!');
                        console.log('Type newGame() if you want to play new game.');
                        break;
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
     * Method print()
     * 
     * used for printing game field
     */

    print() {
        for (let row of this._displayField) {
            console.log(row.join(' '));
        }
    };

    /**
     * Static Method generateField()
     * 
     * Generates game area which contains the hat and holes, not visible for player.
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
     * Static Method generateBlankField()
     * 
     * @param {*} height 
     * @param {*} width 
     * @returns blank game area that is visible to player.
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


function newGame() {
    let myField;

    const blankField = Field.generateBlankField(5,5);

    const newField = Field.generateField(5, 5, 1);

    myField = new Field (newField, blankField);

    return myField.playGame();
}

newGame();
