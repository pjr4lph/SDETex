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
    word = word.toLowerCase();
    // lines 16 to 19 checks/makes sure the last item of the word
    // isn't punctuation, if so it is removed because potentially it
    // could falsley add to the length of word
    const lastCharCode = word[word.length-1].charCodeAt();
    const currentWord = lastCharCode >= 97 && lastCharCode <= 122
      ? word
      : word.slice(0, word.length-1);

    if (word.length > longestWordLength) {
      longestWord = word;
      longestWordLength = longestWord.length;
    }
  });
  this.longestWord = longestWord;
  return `${longestWordLength} and ${this.longestWord}`;
}
// inital test of the SentenceCheck class 
const currentSentence = new SentenceCheck('The cow jumped over the moon.');
console.log(currentSentence.findLongestWord());

module.exports = SentenceCheck;
