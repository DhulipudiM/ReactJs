const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ',3);
words.splice(2,0);
console.log(words);
