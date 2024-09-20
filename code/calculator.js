function addNumbers(inputString) {
    // Check if the input string is empty
    if (!inputString) {
        return 0; // Return 0 for empty input
    }
    
    // Split the string by commas
    const numbers = inputString.split(',').map(num => {
        const parsedNum = Number(num);
        return isNaN(parsedNum) ? 0 : parsedNum; // Convert invalid numbers to 0
    });

    // Check for more than 2 numbers
    if (numbers.length > 2) {
        throw new Error("Invalid input: only up to 2 numbers are allowed.");
    }

    // Return the sum of the numbers
    return numbers.reduce((acc, num) => acc + num, 0);
}

// Usage examples
console.log(addNumbers("20"));      // Outputs: 20
console.log(addNumbers("1,5000"));  // Outputs: 5001
console.log(addNumbers("4,-3"));    // Outputs: 1
console.log(addNumbers(""));         // Outputs: 0
console.log(addNumbers("5,tytyt"));  // Outputs: 5
