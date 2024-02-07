// recursion

function rec(n) {
    
    if (n <= 1) {
        
        return;
    }
    
    let a = n * rec(n - 1);
    // console.log(a);
    return a
}

let result = rec(5);

console.log(result);