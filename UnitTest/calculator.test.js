// calculator.test.js
const { addNumbers } = require('./calculator'); // Assuming the function is in calculator.js

describe('addNumbers', () => {
    test('adds positive numbers', () => {
        expect(addNumbers("20")).toBe(20);
        expect(addNumbers("1,5000")).toBe(5001);
    });

    test('adds negative and positive numbers', () => {
        expect(addNumbers("4,-3")).toBe(1);
    });

    test('returns 0 for empty input', () => {
        expect(addNumbers("")).toBe(0);
    });

    test('handles invalid numbers', () => {
        expect(addNumbers("5,tytyt")).toBe(5);
        expect(addNumbers("10,abc")).toBe(10);
        expect(addNumbers("xyz,20")).toBe(20);
    });

    test('throws an error for more than 2 numbers', () => {
        expect(() => addNumbers("1,2,3")).toThrow("Invalid input: only up to 2 numbers are allowed.");
        expect(() => addNumbers("10,20,30")).toThrow("Invalid input: only up to 2 numbers are allowed.");
    });
});
