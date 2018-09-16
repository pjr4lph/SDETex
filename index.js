// In the programming language of your choice create a class with a method
// to return the length and longest words in a sentence. For example,
// “The cow jumped over the moon.” should return 6 and “jumped”.

function SentenceCheck(str) {
  this.sentence = str;
}

SentenceCheck.prototype.findLongestWord = function() {
  let longestWord = '';
  let longestWordLength = longestWord.length;
  this.sentence.split(' ').forEach((word) => {
    if (word.length > longestWordLength) {
      longestWord = word;
      longestWordLength = longestWord.length;
    }
  });
  return `${longestWordLength} and ${longestWord}`;
}

const currentSentence = new SentenceCheck('The cow jumped over the moon.');
console.log(currentSentence.findLongestWord());
