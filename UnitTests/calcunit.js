// parseInput.js
function parseInput(input) {
    input = input.trim();
    const numbers = input.split(',').map(num => {
        const parsed = parseFloat(num);
        return isNaN(parsed) ? 0 : parsed;
    });

    if (numbers.length === 0) {
        return 0; // If no numbers, return 0
    }

    return numbers.reduce((acc, curr) => acc + curr, 0);
}

module.exports = parseInput;

// parseInput.test.js
const parseInput = require('./parseInput');

describe('parseInput', () => {
    test('should return a single number', () => {
        expect(parseInput("20")).toBe(20);
    });

    test('should return the sum of two numbers', () => {
        expect(parseInput("1,5000")).toBe(5001);
    });

    test('should return the sum of two numbers with negative', () => {
        expect(parseInput("4,-3")).toBe(1);
    });

    test('should return 0 for empty input', () => {
        expect(parseInput("")).toBe(0);
    });

    test('should return 0 for invalid number', () => {
        expect(parseInput("5,tytyt")).toBe(5);
    });

    test('should return the sum of multiple numbers', () => {
        expect(parseInput("1,2,3,4,5,6,7,8,9,10,11,12")).toBe(78);
    });

    test('should handle missing numbers by adding zero', () => {
        expect(parseInput("0")).toBe(0);
        expect(parseInput("0,")).toBe(0);
        expect(parseInput(",0")).toBe(0);
        expect(parseInput(",")).toBe(0);
    });

    test('should handle multiple invalid numbers', () => {
        expect(parseInput("a,b")).toBe(0);
        expect(parseInput("10,abc")).toBe(10);
        expect(parseInput("xyz,5")).toBe(5);
    });
});
