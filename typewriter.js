const sentence = 'hello there from lighthouse labs';

const typeWriter = (cb, sentence) => {
  let count = 0;
  let interval = 0;
  for (const char of sentence) {
    count += 50;
    setTimeout(() => {
      interval++;
      cb(char)
      if (interval === sentence.length) {
        console.log()
      }
    }, count);
  }
};

const printChar = (char) => {
  process.stdout.write(char);
};

typeWriter(printChar, sentence);