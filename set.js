const find = (ar,value) => {
   //  console.log(value);

    const mySet = new Set;

    for (let i = 0; i < ar.length; i++){
        const remins = value - ar[i];
        if (mySet.has(remins)) {
            return [ar[i], remins];
        }
        mySet.add(ar[i])
    }
}

console.log(find([1,2,3,45,6,65,3],6));