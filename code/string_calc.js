function parseInput(input) {
    // Trim the input to remove any leading or trailing whitespace
    input = input.trim();
  
    // Split the input by comma
    const numbers = input.split(',').map(num => {
        // Try to parse each number; if invalid, convert to 0
        const parsed = parseFloat(num);
        return isNaN(parsed) ? 0 : parsed;
    });
  
    // Check if more than 2 numbers are provided
    if (numbers.length > 2) {
        throw new Error('Too many numbers provided. Please provide a maximum of 2 numbers.');
    }
  
    // Handle empty input or missing numbers
    if (numbers.length === 0 || (numbers.length === 1 && numbers[0] === 0)) {
        numbers.push(0); // Ensure at least two numbers
    }
  
    // Return the sum of the numbers (up to 2)
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Example usage
const inputs = [
    "20",          // returns 20
    "1,5000",     // returns 5001
    "4,-3",       // returns 1
    "",           // returns 0
    "5,tytyt",    // returns 5
    "3,4,5"       // throws an error
];

inputs.forEach(input => {
    try {
        const result = parseInput(input);
        console.log(`Input: "${input}" => Output: ${result}`);
    } catch (error) {
        console.error(`Input: "${input}" => Error: ${error.message}`);
    }
});
