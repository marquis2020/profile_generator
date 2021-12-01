const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("what's your name? (nicknames are acceptable) ", (answer1) => {
  rl.question("what's an activity you like doing? ", (answer2) => {
    rl.question("what do you listen to while doing that? ", (answer3) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (answer4) => {
        rl.question("whats your favorite thing to eat at this meal? ", (answer5) => {
        rl.question("what's your super powerIn a few words, tell us what you are amazing at! ", (answer6) => {
          rl.question("what's your favourite movie", (answer7) => {
            console.log(`${answer1} likes to ${answer2}. when they're not doing ${answer2},\nthey're blasting ${answer3} which i think is pretty cool.\n ${answer1}'s favourite meal is ${answer4}, and ${answer1}'s favourite thing to eat for that meal is ${answer5}.\n ${answer1}'s super power is ${answer6} and ${answer1} favorite movie is`);
            rl.close();
           });
          });
        });
      });
    });
  });
});