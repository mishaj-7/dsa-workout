// if give a string to a function it should return that string in reverse order


a = 'sujith';
length = a.length;
//console.log(length);
const revers = (a) => {
    let reversed= '';
 for(let i=length-1; i>=0;i--){
    reversed = reversed+a[i]
    if(i==0){
        return reversed;
    }
}
}

console.log(revers(a))