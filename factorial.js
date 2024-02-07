function factorail(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    //console.log(i)
    fact = fact * i;
  }
  return fact;
}
console.log(factorail(5));


// Big-O => O(n);