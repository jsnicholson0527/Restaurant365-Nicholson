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

    test('sums multiple numbers with comma and newline', () => {
        expect(addNumbers("1,2,3,4,5,6,7,8,9,10,11,12")).toBe(78);
        expect(addNumbers("1\n2,3")).toBe(6);
        expect(addNumbers("1\n2\n3\n4")).toBe(10);
    });
});
