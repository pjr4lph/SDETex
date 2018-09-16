const SentenceCheck = require('./index.js');
const expect = require('expect');

describe('SentenceCheck unit tests', () => {
  let currentSentence = '';
  let input = 'The cow jumped over the moon.';
  before(() => {
    currentSentence = new SentenceCheck(input);
  });

  describe('#SentenceCheck', () => {
    it('SentenceCheck has this.sentence set to input string', () => {
      expect(currentSentence.sentence).toEqual(input);
    });

    it('class method findLongestWord returns the longest word and its length', () => {
      expect(currentSentence.findLongestWord()).toEqual('6 and jumped');
    });

    it('findLongestWord checks the length of each word and doesn\'t include punctuation', () => {
      // here testing to make sure that the longest word doesnt include punctuation and therefor
      // if a false positive
      const removedPunctuation = currentSentence.longestWord.match(/[^\W]+/g).join(' ');
      expect(currentSentence.longestWord).toEqual(removedPunctuation);
    });
  });

});
