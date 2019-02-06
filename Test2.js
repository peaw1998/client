let stdin = process.openStdin()

stdin.addListener("data", (d) => {
    
    let num = d
    console.log('Fibonacci = ' + fibonacci(num-1))
    stdin.end()
});

function fibonacci(num) {
    if (num <= 1) return 1;
    else return fibonacci(num - 1) + fibonacci(num - 2);
}