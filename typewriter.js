const sentence = 'hello there from lighthouse labs';

const typeWriter = (sentence) => {
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, 1000);
  }
};

typeWriter(sentence);