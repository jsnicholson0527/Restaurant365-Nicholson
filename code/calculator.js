function addNumbers(inputString) {
    // Check if the input string is empty
    if (!inputString) {
        return 0; // Return 0 for empty input
    }

    // Split the string by commas and newlines
    const numbers = inputString.split(/[,|\n]/).map(num => {
        const parsedNum = Number(num);
        return isNaN(parsedNum) ? 0 : parsedNum; // Convert invalid numbers to 0
    });

    const negativeNumbers = numbers.filter(num => num < 0); // Collect negative numbers

    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }

    // Return the sum of the non-negative numbers
    return numbers.reduce((acc, num) => acc + (num >= 0 ? num : 0), 0);
}

// Usage examples
try {
    console.log(addNumbers("20")); // Outputs: 20
    console.log(addNumbers("1,5000")); // Outputs: 5001
    console.log(addNumbers("4,-3")); // Throws an exception
} catch (error) {
    console.error(error.message); // Handle the error
}

try {
    console.log(addNumbers("")); // Outputs: 0
    console.log(addNumbers("5,tytyt")); // Outputs: 5
    console.log(addNumbers("1\n2,3")); // Outputs: 6
    console.log(addNumbers("1\n2\n3\n4")); // Outputs: 10
} catch (error) {
    console.error(error.message); // Handle the error
}
