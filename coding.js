const lcdNumbers = {
    '0': [' _ ', '| |', '|_|'],
    '1': ['   ', '  |', '  |'],
    '2': [' _ ', ' _|', '|_ '],
    '3': [' _ ', ' _|', ' _|'],
    '4': ['   ', '|_|', '  |'],
    '5': [' _ ', '|_ ', ' _|'],
    '6': [' _ ', '|_ ', '|_|'],
    '7': [' _ ', '  |', '  |'],
    '8': [' _ ', '|_|', '|_|'],
    '9': [' _ ', '|_|', ' _|']
};

function generateLCDOutput(number) {
    const numStr = number.toString();
    const lcd = ['', '', ''];

    for (let digit of numStr) {
        for (let i = 0; i < 3; i++) {
            lcd[i] += lcdNumbers[digit][i];
        }
    }

    // Join and return the lines without trailing spaces
    return lcd.join('\n');
}

// Export the function for use in test cases
module.exports = { generateLCDOutput };
