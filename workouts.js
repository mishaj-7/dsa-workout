function commonChars(words) {

  let result = words[0].split('');
  console.log(result)

  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    const temp = [];

    for (let j = 0; j < result.length; j++) {
      const char = result[j];
      const index = word.indexOf(char);

      if (index !== -1) {
        temp.push(char);
        
        word = word.slice(0, index) + word.slice(index + 1);
      }
    }

    result = temp;
  }

  return result;
}


commonChars(["bella","label","roller"]);