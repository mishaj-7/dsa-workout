function solution(s, t) {
  const m = s.length, n = t.length;
  let j = 0;

  for (let i = 0; i < m; i++) {
    if (j < n && s[i] === t[j]) {
      j++;
    }
  }

  return n - j;
}

console.log(solution('coaching','coding'))

// here co found same place which means 4 left in t append 4 ding in s, t become subsequnce of s 

//Since j represents the number of characters from t that we have already accounted for, we need to append the remaining characters from t to the end of s.