function fibonacci(n){
    // base case
    if (n <= 1) return n
    // recursive case
    return fibonacci(n-1) + fibonacci(n-2)
}