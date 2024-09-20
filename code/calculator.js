function addNumbers(inputString) {
    // Check if the input string is empty
    if (!inputString) {
        return 0; // Return 0 for empty input
    }
    
    // Split the string by commas and convert to numbers
    const numbers = inputString.split(',').map(num => {
        const parsedNum = Number(num);
        return isNaN(parsedNum) ? 0 : parsedNum; // Convert invalid numbers to 0
    });

    // Return the sum of the numbers
    return numbers.reduce((acc, num) => acc + num, 0);
}

// Usage examples
console.log(addNumbers("20"));              // Outputs: 20
console.log(addNumbers("1,5000"));          // Outputs: 5001
console.log(addNumbers("4,-3"));            // Outputs: 1
console.log(addNumbers(""));                 // Outputs: 0
console.log(addNumbers("5,tytyt"));          // Outputs: 5
console.log(addNumbers("1,2,3,4,5,6,7,8,9,10,11,12")); // Outputs: 78
