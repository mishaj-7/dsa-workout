var commonStr = function (words) {
    //console.log(words.length);
    let res = words[0].split('');
    for(let i=1; i<words.length; i++) {
        let word = words[i];
        const temp = [];
        for(let j=0; j < res.length; j++) {
            let val = res[j];
           //  console.log(typeof(val))
            const ind = word.indexOf(val);
            //console.log(ind);
            if(ind !== -1) {
                temp.push(val);
                word = word.slice(0,ind) + word.slice(ind + 1);
            }
        }
        res = temp;
    }
    return res;
};

console.log(commonStr(["e","label","roller"]))


