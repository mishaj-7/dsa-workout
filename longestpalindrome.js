var longestPalindrome = function(s) {     
    const repet = new Map();
    for(const str of s) {
        repet.set(str, (repet.get(str) || 0) +1);
    }
    let ans =0;
    let odd = false;
    for (const count of repet.values()) {
    ans += Math.floor(count / 2) * 2;   
    if (count % 2 === 1) {
      odd = true;
    }
    }
    if (odd) {
    ans++;
  }
  return ans;
};

console.log(longestPalindrome("malayalam"))