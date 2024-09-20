function addNumbers(inputString) {
    // Check if the input string is empty
    if (!inputString) {
        return 0; // Return 0 for empty input
    }
    
    // Split the string by commas and convert to numbers
    const numbers = inputString.split(',').map(Number);
    
    // Check for NaN values (invalid numbers)
    if (numbers.some(isNaN)) {
        throw new Error("Invalid input: all values must be numbers.");
    }

    // Return the sum of the numbers
    return numbers.reduce((acc, num) => acc + num, 0);
}

// Usage example
console.log(addNumbers("1,2,3")); // Outputs: 6
console.log(addNumbers(""));      // Outputs: 0
console.log(addNumbers("10,20")); // Outputs: 30
