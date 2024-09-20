// calculator.test.js
const { addNumbers } = require('./calculator'); // Assuming the function is in calculator.js

describe('addNumbers', () => {
    test('adds positive numbers', () => {
        expect(addNumbers("20")).toBe(20);
        expect(addNumbers("1,5000")).toBe(1); // 5000 is invalid, so only 1 is included
    });

    test('throws an error for negative numbers', () => {
        expect(() => addNumbers("4,-3")).toThrow('Negative numbers not allowed: -3');
        expect(() => addNumbers("5,-6,-7")).toThrow('Negative numbers not allowed: -6, -7');
        expect(() => addNumbers("-1,-2,-3")).toThrow('Negative numbers not allowed: -1, -2, -3');
    });

    test('returns 0 for empty input', () => {
        expect(addNumbers("")).toBe(0);
    });

    test('handles invalid numbers', () => {
        expect(addNumbers("5,tytyt")).toBe(5);
        expect(addNumbers("10,abc")).toBe(10);
        expect(addNumbers("xyz,20")).toBe(20);
        expect(addNumbers("2,1001,6")).toBe(8); // 1001 is invalid, so only 2 and 6 are included
    });

    test('sums multiple numbers with comma and newline', () => {
        expect(addNumbers("1,2,3,4,5,6,7,8,9,10,11,12")).toBe(78);
        expect(addNumbers("1\n2,3")).toBe(6);
        expect(addNumbers("1\n2\n3\n4")).toBe(10);
    });

    test('supports custom delimiters', () => {
        expect(addNumbers("//#\n2#5")).toBe(7);
        expect(addNumbers("//,\n2,ff,100")).toBe(102); // 'ff' is invalid, so only 2 and 100 are included
        expect(addNumbers("//;\n1;2")).toBe(3);
        expect(addNumbers("//|\n1|2|3")).toBe(6);
        expect(addNumbers("//[***]\n11***22***33")).toBe(66); // Testing custom delimiter of length 3
        expect(addNumbers("//[%%]\n1%%2%%3")).toBe(6); // Another custom delimiter
        expect(addNumbers("//[--]\n1--2--3--4")).toBe(10); // Yet another custom delimiter
    });

    test('handles custom delimiters with negative numbers', () => {
        expect(() => addNumbers("//;\n1;-2")).toThrow('Negative numbers not allowed: -2');
        expect(() => addNumbers("//.\n4.-3")).toThrow('Negative numbers not allowed: -3');
        expect(() => addNumbers("//[***]\n1***-2")).toThrow('Negative numbers not allowed: -2'); // Custom delimiter with negative
    });

    test('handles custom delimiters with invalid numbers', () => {
        expect(addNumbers("//@\n2@ff@100")).toBe(102); // 'ff' is invalid, so only 2 and 100 are included
        expect(addNumbers("//$\n3$abc")).toBe(3); // 'abc' is invalid, so only 3 is included
        expect(addNumbers("//[***]\n2***ff***100")).toBe(102); // 'ff' is invalid, so only 2 and 100 are included
    });
});
