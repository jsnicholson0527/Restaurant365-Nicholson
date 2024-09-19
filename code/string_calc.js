function parseInput(input) {
    // Trim the input to remove any leading or trailing whitespace
    input = input.trim();
  
    // Split the input by both comma and newline characters
    const numbers = input.split(/[,|\n]/).map(num => {
        // Try to parse each number; if invalid, convert to 0
        const parsed = parseFloat(num);
        return isNaN(parsed) ? 0 : parsed;
    });
  
    // Handle empty input or missing numbers
    if (numbers.length === 0) {
        return 0; // If no numbers, return 0
    }

    // Return the sum of the numbers
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Example usage
const inputs = [
    "20",                      // returns 20
    "1,5000",                 // returns 5001
    "4,-3",                   // returns 1
    "",                        // returns 0
    "5,tytyt",                // returns 5
    "1\n2,3",                 // returns 6
    "1\n2\n3\n4\n5"           // returns 15
];

inputs.forEach(input => {
    const result = parseInput(input);
    console.log(`Input: "${input}" => Output: ${result}`);
});
