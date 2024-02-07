function fibonacci(n) {
  fib = [0, 1];
  for (var i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(7)); // enter how many number in the sequence you want to see

//Big-O => O(n)
