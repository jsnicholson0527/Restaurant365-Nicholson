function addNumbers(inputString) {
    // Check if the input string is empty
    if (!inputString) {
        return 0; // Return 0 for empty input
    }

    let delimiter = ',';
    let numbersString = inputString;

    // Check for a custom delimiter
    if (inputString.startsWith('//')) {
        const delimiterEndIndex = inputString.indexOf('\n');
        const delimiterSection = inputString.substring(2, delimiterEndIndex);
        
        // Handle multi-character delimiter
        delimiter = delimiterSection.replace(/[\[\]]/g, ''); // Remove square brackets if present
        numbersString = inputString.substring(delimiterEndIndex + 1); // Get the numbers part
    }

    // Split the string by the custom delimiter and newlines
    const numbers = numbersString.split(new RegExp(`[${delimiter}\\n]`)).map(num => {
        const parsedNum = Number(num);
        return isNaN(parsedNum) || parsedNum > 1000 ? 0 : parsedNum; // Convert invalid numbers or numbers > 1000 to 0
    });

    const negativeNumbers = numbers.filter(num => num < 0); // Collect negative numbers

    // If there are negative numbers, throw an error
    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }

    // Return the sum of the non-negative numbers <= 1000
    return numbers.reduce((acc, num) => acc + (num >= 0 ? num : 0), 0);
}

// Usage examples
try {
    console.log(addNumbers("20")); // Outputs: 20
    console.log(addNumbers("1,5000")); // Outputs: 1
    console.log(addNumbers("4,-3")); // Throws an exception
    console.log(addNumbers("")); // Outputs: 0
    console.log(addNumbers("5,tytyt")); // Outputs: 5
    console.log(addNumbers("1\n2,3")); // Outputs: 6
    console.log(addNumbers("1\n2\n3\n4")); // Outputs: 10
    console.log(addNumbers("2,1001,6")); // Outputs: 8
    console.log(addNumbers("//#\n2#5")); // Outputs: 7
    console.log(addNumbers("//[***]\n11***22***33")); // Outputs: 66
    console.log(addNumbers("//[%%]\n1%%2%%3")); // Outputs: 6
    console.log(addNumbers("//[--]\n1--2--3--4")); // Outputs: 10
} catch (error) {
    console.error(error.message); // Handle the error
}
