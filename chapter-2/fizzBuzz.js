for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i}: FizzBuzz`);
    } else if (i % 3 === 0) {
        console.log(`${i}: Fizz`);
    } else if (i % 5 === 0) {
        console.log(`${i}: Buzz`);
    } else {
        console.log(`${i}: It is neither of those.`);
    }
}

// Book solution

for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
}
