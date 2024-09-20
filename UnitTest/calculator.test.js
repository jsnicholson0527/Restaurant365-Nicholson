// calculator.test.js
const { addNumbers } = require('./calculator'); // Assuming the function is in calculator.js

describe('addNumbers', () => {
    test('adds positive numbers', () => {
        expect(addNumbers("1,2,3")).toBe(6);
        expect(addNumbers("10,20,30")).toBe(60);
    });

    test('returns 0 for empty input', () => {
        expect(addNumbers("")).toBe(0);
    });

    test('handles single number input', () => {
        expect(addNumbers("5")).toBe(5);
    });

    test('throws an error for invalid input', () => {
        expect(() => addNumbers("1,a,3")).toThrow("Invalid input: all values must be numbers.");
        expect(() => addNumbers("1,2,NaN")).toThrow("Invalid input: all values must be numbers.");
    });
});
