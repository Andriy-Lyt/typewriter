const sentence = "hello there from lighthouse labs";

const typer = (str, delay) => {
  let interval = delay;
  let counter = 0;

  for (const char of str) {
    setTimeout(() => {
      process.stdout.write(char);
      counter++;
      if (counter == str.length) {
        console.log("");
      }
    }, delay);
    delay += interval;
  }
}// closing function

typer(sentence, 20);

