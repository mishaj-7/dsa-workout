// given an array and a sum when ay of addition operation of any element each other in array give the sum function should return true else false 


// arr[1,5,44,675,433]
//sum =49;

// this give to a function it return TRUE becuasse 5+44 is 49

//arr[1,2,3,4,5]
//sum = 11

//it should return false because any of the element in taht added each other not give sum 11

// answer is there at screen shot which use set concept to achive the answer



const sample = (ar1,sum)=> {
   
   
    let len = ar1.length;
   for(let i=0; i<len;i++) {
       
       if(ar1[i]+ar1[i+1]==sum){
           return true;
       }
       
   }
  return false;
}


let c = sample([1, 2, 3, 4, 5],6 )

console.log(c);