// In the programming language of your choice create a class with a method
// to return the length and longest words in a sentence. For example,
// “The cow jumped over the moon.” should return 6 and “jumped”.

function SentenceCheck(str) {
  this.sentence = str;
  this.longestWord = null;
}

SentenceCheck.prototype.findLongestWord = function() {
  let longestWord = '';
  let longestWordLength = 0;
  this.sentence.split(' ').forEach((word) => {
    if (word.length > longestWordLength) {
      longestWord = word;
      longestWordLength = longestWord.length;
    }
  });
  this.longestWord = longestWord;
  return `${longestWordLength} and ${this.longestWord}`;
}

const currentSentence = new SentenceCheck('The cow jumped over the moon.');
console.log(currentSentence.findLongestWord());

module.exports = SentenceCheck;
