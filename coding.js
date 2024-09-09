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

function printLCD(number) {
    const numStr = number.toString();
    const lcd = ['', '', ''];

    for (let digit of numStr) {
        for (let i = 0; i < 3; i++) {
            lcd[i] += lcdNumbers[digit][i] + ' ';
        }
    }

    // Join and print the lines
    console.log(lcd.join('\n'));
}

// Example usage
printLCD(1234567890);
