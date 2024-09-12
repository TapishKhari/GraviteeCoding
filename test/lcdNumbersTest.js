const assert = require('assert');
const { generateLCDOutput } = require('../coding');

describe('LCD Numbers',  function () {
   
    it('should correctly print LCD representation for the number 1', function () {
        const expectedOutput = '   \n  |\n  |';
        const result = generateLCDOutput(1);
        console.log("Result:", result);
        assert.strictEqual(result, expectedOutput);
    });

    it('should correctly print LCD representation for the number 123', function () {
        const expectedOutput = '    _  _ \n  | _| _|\n  ||_  _|';
        const result = generateLCDOutput(123);
        assert.strictEqual(result, expectedOutput);
    });

    it('should correctly print LCD representation for the number 456', function () {
        const expectedOutput = '     _  _ \n|_| |_ |_ \n  |  _||_|';
        const result = generateLCDOutput(456);
        assert.strictEqual(result, expectedOutput);
    });

    it('should correctly print LCD representation for the number 7890', function () {
        const expectedOutput = ' _  _  _  _ \n  |  |  || |\n  |  |  ||_|';
        const result = generateLCDOutput(7890);
        assert.strictEqual(result, expectedOutput);
    });

    it('should correctly print LCD representation for the number 0', function () {
        const expectedOutput = ' _ \n| |\n|_|';
        const result = generateLCDOutput(0);
        assert.strictEqual(result, expectedOutput);
    });
});
