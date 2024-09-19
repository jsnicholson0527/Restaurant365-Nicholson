const parseInput = require('./parseInput');

describe('parseInput', () => {
    test('should return a single number', () => {
        expect(parseInput("20")).toBe(20);
    });

    test('should return the sum of two numbers', () => {
        expect(parseInput("1,5000")).toBe(5001);
    });

    test('should throw an error for negative numbers', () => {
        expect(() => parseInput("4,-3")).toThrow('Negative numbers are not allowed: -3');
    });

    test('should return 0 for empty input', () => {
        expect(parseInput("")).toBe(0);
    });

    test('should return 5 for input with invalid number', () => {
        expect(parseInput("5,tytyt")).toBe(5);
    });

    test('should return the sum of multiple numbers', () => {
        expect(parseInput("1,2,3,4,5,6,7,8,9,10,11,12")).toBe(78);
        expect(parseInput("1\n2,3")).toBe(6);
        expect(parseInput("1\n2\n3\n4\n5")).toBe(15);
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

    test('should throw an error with all negative numbers', () => {
        expect(() => parseInput("-1,-2,-3")).toThrow('Negative numbers are not allowed: -1, -2, -3');
    });

    test('should throw an error with mixed valid and negative numbers', () => {
        expect(() => parseInput("1,-2,3")).toThrow('Negative numbers are not allowed: -2');
    });
});
