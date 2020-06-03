const sentence = 'hello there from lighthouse labs';

const typeWriter = (sentence) => {
  let count = 0;
  let interval = 0;
  for (const char of sentence) {
    count += 50;
    setTimeout(() => {
      interval++;
      process.stdout.write(char);
      if (interval === sentence.length) {
        console.log()
      }
    }, count);
  }
};
typeWriter(sentence);